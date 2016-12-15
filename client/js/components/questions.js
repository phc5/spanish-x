import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';
import Nav from './nav';
import Reset from './reset';
import ImageOutcome from './imageOutcome';
import Score from './score';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchQuestion());
    }

    submit(event) {
        event.preventDefault();
        this.props.dispatch(actions.submitAnswer({
            answer: event.target.answer.value
        }));
        event.target.reset();
    }

    render() {
         if (this.props.questions.length === 0) {
             var spans = <span></span>
         } else {
             var word = this.props.questions.map((question, index) =>
                 <div key={index}>{question.word}</div>
             );
            var score = this.props.questions[0].score
        }
        return (
                <div className="question-page">

                    <Nav />
                        <div className="spanishWord">{word}
                            <form onSubmit={this.submit}>
                                <input name="answer" pattern="^[a-zA-Z ]+$" type="text" autoComplete="off"></input>
                            </form>
                        </div>
                    <Score score={score}/>
                    <ImageOutcome />
                    <Reset />
                </div>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        questions: state.questions,
        answer: state.answer,
        outcome: state.outcome
    };
};

var Container = connect(mapStateToProps)(Questions);
module.exports = Container









