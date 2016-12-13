import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

class Questions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchQuestion());
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
                    <form>
                        <input type="text"></input>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        questions: state.questions,
    };
};

var Container = connect(mapStateToProps)(Questions);
module.exports = Container