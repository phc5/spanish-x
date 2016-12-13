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

    // submitAnswer(event) {
    //     event.preventDefault();
    //     this.props.dispatch(actions.submitAnswer({
    //         _id: this.props.questions._id,
    //         answer: this.refs.userAnswer.value
    //     }));
    //     this.refs.userAnswer.value = '';
    // }

    render() {
        if (!this.props.questions.question) {
            var spans = <span></span>
        } else {
            var spans = this.props.questions.map((question, index) =>
                <span key={index}>{question}</span>
            );
        }
        return (
            <div>
                <section className="button">
                    <p>Firefly X</p>
                    <a className="logout" href="/logout">
                        <span>Log Out</span>
                        <span>To Front</span>
                    </a>
                </section>
                <section>
                    <div>{spans}</div>
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