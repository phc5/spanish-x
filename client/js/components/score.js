import React, {Component} from 'react';

class Score extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="score">Score: {this.props.score}</div>
			</div>
		)
	}
}

export default Score;