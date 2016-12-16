import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

class Questions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.getScores());
    }

    render() {
    	var leaderBoard = [];
 		if (this.props.users.length) {
 			var leaders = [];
 			for (var i = 0; i < this.props.users.length; i++) {
 				leaders.push([this.props.users[i].name, this.props.users[i].score]);
 			}
 			leaders.sort((a,b) => {
                return b[1] - a[1];
            });
 			for (var i = 0; i < leaders.length; i++) {
 				leaderBoard.push(
 						<li key={i}><h4>{leaders[i][0]} ---- {leaders[i][1]}</h4></li>
 					)
 			}
 		}
        return (
                <div className="question-page">
                    <section className="button">
                        <a className="back-home" href="/"><p className="spx">Spanish X</p></a>
                        <h3>Leaderboard</h3>
                        <ul className="leaderboard">
                        	{leaderBoard}
                        </ul>
                    </section>
                </div>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        users: state.users
    };
};

var Container = connect(mapStateToProps)(Questions);
module.exports = Container