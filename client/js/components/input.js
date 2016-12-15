import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
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
        	<div>
        		<div className="spanishWord">{word}
                    <form onSubmit={this.submit}>
                        <input name="answer" pattern="^[a-zA-Z ]+$" type="text" autoComplete="off"></input>
                    </form>
                </div>
                <div className="score">Score: {score}</div>
            </div>
        )
	}
}

const mapStateToProps = function()