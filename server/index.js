import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import dotenv from 'dotenv';
import fs from 'fs';

import User from '../models/user-model';
import Question from '../models/question-model';

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
dotenv.load();

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(bodyParser.json());
app.use(express.static(process.env.CLIENT_PATH));
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//// START GOOGLE AUTH STRAT ////
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://spanishx.herokuapp.com/auth/google/callback'
},
(accessToken, refreshToken, profile, callback) => {
    User.find({ googleId: profile.id }, (err, user) => {
            // once we authorize, populate the questions array for user
            if (!user.length) {
                const questionsArray = [];
                Question.find((err, questions) => {
                    questions.forEach((question) => {
                        questionsArray.push({
                            questionId: question._id,
                            word: question.word,
                            translation: question.translation,
                            algIndex: 1
                        });
                    })

                    User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        accessToken: accessToken,
                        score: 0,
                        questions: questionsArray
                    }, (err, user) => {
                        // console.log(user);
                        return callback(err, user);
                    });
                });
            } else {
                return callback(err, user[0]);
            }
        })
    }
));
//// END GOOGLE AUTH STRAT ////

//// START BEARER STRAT ////
passport.use(new BearerStrategy(
    (token, done) => {
        User.findOne({accessToken: token}, (err, user) => {
            if (err) {
                console.log(err);
                return done(null, false);
            }          
            return done(null, user);
        });
    }
));
//// END BEARER STRAT ////

//// START AUTH REQUESTS ////
app.get('/auth/google', passport.authenticate('google', {scope:['profile']}));
    
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }), (req, res) => {
    fs.readFile('./client/index.html', (err, html) => {
        if (err) {
            return res.status(400).json(err);
        }
        html = html.toString().replace('<!--auth_token-->', 
            `<script>
                const TOKEN="${req.user.accessToken}";
                history.replaceState(null, null, "/#/questions");
             </script>`);
        res.send(html);
    });
  }
);
//// END AUTH REQUESTS ////

//// START USERS ////
app.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(users);
    });
});

app.delete('/:userId', passport.authenticate('bearer', { session: false }), (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndRemove(userId, (err, user) => {
        if (err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(user);
    });
});

app.put('/users', passport.authenticate('bearer', { session: false }), (req, res) => {
    const questionsArray = [];
    Question.find((err, questions) => {
        questions.forEach((question) => {
            questionsArray.push({
                questionId: question._id,
                word: question.word,
                translation: question.translation,
                algIndex: 1
            });
        });
        User.findByIdAndUpdate(req.user._id, {questions: questionsArray, score: 0}, (err, user) => {
            if (err) {
                return res.status(400).json(err);
            }
            user.questions = questionsArray;
            user.score = 0;
            const word = user.questions[0];
            res.status(200).json(questionResponse(word.questionId, word.word, user.score, false));
        });
    });
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
//// END USERS ////

//// START QUESTIONS ////
const questionResponse = (questionId, word, score, outcome) => {
    //need this to send a question back to the client.
    return { questionId, word, score, outcome };
};

app.get('/questions', passport.authenticate('bearer', { session: false }), (req, res) => {
    // grab one word from user's questions array...
    // send word, question id (to get translation later, score, correct/incorrect
    const word = req.user.questions[0];
    res.status(200).json(questionResponse(word.questionId, word.word, req.user.score, false));
});

app.post('/questions', passport.authenticate('bearer', { session: false }), (req, res) => {
    if (!req.body.answer) {
        return res.status(422).json({
            message: 'Missing field: answer'
        });
    }
    const user = req.user;
    let currentQuestion = user.questions[0];
    const userAnswer = req.body.answer.toLowerCase().trim();
    let outcome = false;

    if (userAnswer === currentQuestion.translation) {
        currentQuestion.algIndex *= 5;
        user.score += 10;
        outcome = true;
    } else {
        currentQuestion.algIndex = 2;
        user.score -= 5;
    }

    user.questions.splice(currentQuestion.algIndex, 0, user.questions.shift());
    currentQuestion = user.questions[0];

    User.findByIdAndUpdate(user._id, {
        questions: user.questions,
        score: user.score
    }, {new: true}, (err, userModified) => {
        if (err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(questionResponse(currentQuestion.questionId, currentQuestion.word, userModified.score, outcome));
    })
});
//// END QUESTIONS ////

function runServer() {
    let databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://' + process.env.MLAB_USER + ':' + process.env.MLAB_PASS + '@ds133418.mlab.com:33418/spanish-x';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUri).then(function() {
     app.listen(PORT, HOST, (err) => {

        if (err) {
            console.error(err);
            return(err);
        }
        const host = HOST || 'localhost';
        console.log(`Listening on ${host}:${PORT}`);
    });
 });
}

if (require.main === module) {
    runServer();
}