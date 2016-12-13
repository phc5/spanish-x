import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

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
        }))
    }

    render() {
        console.log(this.props.questions);
        if (!this.props.questions) {
            var spans = <span></span>
        } else {
            var word = this.props.questions.map((question, index) =>
                <span key={index}>{question.word} &nbsp;</span>
            );
        }
        return (
            <div>
                <section className="button">
                    <p>Spanish X</p>
                    <a className="logout" href="/logout">
                        <span>Log Out</span>
                    </a>
                </section>
                <section>
                    <div>{word}</div>
                    <form onSubmit={this.submit}>
                        <input name="answer" type="text"></input>
                    </form>
                </section>
            </div>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        questions: state.questions,
        answer: state.answer
    };
};

var Container = connect(mapStateToProps)(Questions);
module.exports = Container