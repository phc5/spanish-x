import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageOutcome extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.outcome) {
			var imageOutcome = <div className="correct" key="correct"><img className="iframeCorrect" src="https://m.popkey.co/136a10/X03AG.gif"/></div>
			var outcome = <div>Correct</div>
		} else if (this.props.outcome == null) {
			var outcome = <span></span>
		} else {
			var imageOutcome = <div className="incorrect" key="incorrect"><img src="https://media.giphy.com/media/T6KhOswycnLLq/giphy.gif"/></div>
			var outcome = <div>Incorrect</div>
		}
		return (
			<div>
				<div className="outcome">{outcome}</div>
				{imageOutcome}
			</div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {
		outcome: state.outcome
	}
}

var Container = connect(mapStateToProps)(ImageOutcome);
module.exports = Container;