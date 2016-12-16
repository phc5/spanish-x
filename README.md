# Spanish X : Let's Learn Spanish

With over 50 million Spanish-speaking natives in the United States, it is easy to say that Spanish has been one of the most popular language spoken today.  This is the main reason why, learning Spanish can improve your employment potential.  Just knowing a second language would increase your chances, but to know Spanish could set you apart from those that know a different second language.  In addition, travelling around the world could also be that much sweeter, knowing Spanish.

In order to learn Spanish or any other language, we would need to have a good/efficient way of learning so we can actually retain what we are studying.  That's where Spaced repetition comes in handy.  With spaced repetition, if we know something, we don't need to practice it for some period of time, but if we don't know, then we need to practice it.  For example, if you know the material, it will be sent to the end of the list, but if you don't, it will be put in somewhere in the list, where it comes back sooner.

## What is spaced repetition?
Spaced repetition is a method for efficient learning that has you practice concepts or skills over increasing periods of time. It's based on the notion of a "forgetting curve," or the idea that over time, if we don't actively use or reflect on something we know, our knowledge decays. With spaced repetition, we stay ahead of that moment of forgetting, but we do it in a smart way: if we know something, we don't need to practice it for some period of time. If we don't know something, we do need to practice it.

For example, let's say that you wanted to learn four new words, A, B, C and D.  Using spaced repetition you might test the words in this order:

ABABCACBDCADB...

Notice how the spacing between the questions gets longer as you go on.  So subsequent tests on question A are separated by one question (B), then two questions (BC), then four questions (CBDC).  And the same thing happens with question B and question C.  If you got one of the questions wrong then you would reduce the spacing for that question to make sure that the correct answer is.

## Frontend
The frontend for the app was built using React and Redux, and allow users to login, answer the questions, and see how many questions they have successfully answered. To answer a question the user will be shown a word in Spanish on the left-hand side of the screen, and asked to type the corresponding word in English on the right-hand side. When the user submits their answer, they will be given feedback and will be taken to the next question.

The frontend submits information stating whether the question was answered correctly or not to the backend so that the spaced repetition algorithm can take that into account. This will also allow the user's score (how many questions they have answered correctly) to be updated.

To authenticate, we used Google's implementation of OAuth. This will allow anyone with a Google account to simply and easily register or login to your app. On the frontend this makes your requirements very simple: you simply need a login button which links to the appropriate backend endpoint, and a combination of Google and your backend will take care of the rest.

### Requirements
* Technologies: React, Redux
* Two pages: Landing page and spaced repetition page
* Landing page:
    - Advertise the app
    - Register/login with Google button
* Spaced repetition page:
    - Displays current word
    - Text input for answer
    - Notifies the user whether they were correct or incorrect
    - Submits correct/incorrect to backend
    - Displays a score based on user's progress

## Backend

The backend of the app plays three key roles.  The first is authentication.  To allow users to authenticate, the backend should use the [Google OAuth 2.0 strategy](https://github.com/jaredhanson/passport-google-oauth2) for Passport.  To protect the endpoints you should use the [Bearer strategy](https://github.com/jaredhanson/passport-http-bearer).

The second role is to integrate the spaced repetition algorithm.

The third role is to store the users' progress in a MongoDB database (mLab).  This should include both the number of questions which they have answered correctly, plus any information about their answer history that your spaced repetition algorithm needs in order to generate a new sequence of words to test the user.

### Requirements

* Technologies: Node.js, Express, MongoDB, Passport, OAuth
* Allow users to register/login using Google OAuth
* Use the spaced repetition algorithm to generate the next word pair
* Pairs of words should be stored in a Mongo database
    - This should be a fixed array of questions for an MVP
* Store the number of questions which users have answered correctly in the database
* Store whatever information is needed for the algorithm about the user's answer history in the database

## Mockups

- [Landing page](https://wireframe.cc/PAFKuo) - This allows the user to login or register to use the app.
- [Spaced repetition page](https://wireframe.cc/7jKL60) - This allows the user to answer questions by typing answers in the text input.

##Special Thanks to:
* https://cdn.drawception.com/images/panels/2016/9-10/OO5Rs4sEP2-2.png
** For their wonderful background image

