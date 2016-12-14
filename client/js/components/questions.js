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
        }));
        event.target.reset();
    }
    render() {
        if (this.props.questions.length === 0) {
            var spans = <span></span>
        } else {
            var word = this.props.questions.map((question, index) =>
                <span key={index}>{question.word} &nbsp;</span>
            );
            var score = this.props.questions[0].score
        }
        if (this.props.outcome) {
            var outcome = <div className="correct"><iframe className="iframeCorrect" src="https://m.popkey.co/136a10/X03AG.gif" frameborder="0" scrolling="no" allowFullScreen></iframe></div>
        } else if (this.props.outcome == null) {
            var outcome = <span></span>
        } else {
            var outcome = <div className="incorrect"><iframe src="//giphy.com/embed/T6KhOswycnLLq" allowFullScreen></iframe></div>
        }
        return (
                <div className="question-page">
                    <section className="button">
                        <p className="spx">Spanish X</p>
                        <a className="logout" href="/logout">
                            <img src="/assets/logout.png" className="logoutImg"/>
                        </a>
                    </section>
                    <section>
                        <div className="spanishWord">word</div>
                       
                        <form onSubmit={this.submit}>
                            <input name="answer" type="text" autoComplete="off"></input>
                        </form>
                    </section>
                    
                    <section>
                        <div className="score">score</div>
                    </section>
                    <section>
                        {outcome}
                    </section>
                    
                   
                    
                   
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