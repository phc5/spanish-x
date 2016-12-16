import React, {Component} from 'react';
import actions from '../actions/actions';
import {connect} from 'react-redux';

class Reset extends Component {
	constructor(props) {
		super(props)
		this.reset = this.reset.bind(this);
	}

	reset(event) {
		event.preventDefault();
		this.props.dispatch(actions.reset());
	}


	render () {
		return (
			<div>
				<button className="reset" onClick={this.reset}>RESET</button>
			</div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {

	}
}

var Container = connect(mapStateToProps)(Reset);
module.exports = Container;