import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

var swap = function(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

var partition = function(array, start, end) {
	var pivot = array[end - 1][1];
	var j = start; 
	for (var i = start; i < end - 1; i++) {
		if (array[i][1] >= pivot) {
			swap(array, i, j);
			j++;
		}
	}
	swap(array, end - 1, j);
	return j;
}

var quickSort = function(array, start, end) {
	start = start === undefined ? 0 : start;
	end = end === undefined ? array.length : end;
	if (start >= end) {
		return array;
	}
	var middle = partition(array, start, end);
	array = quickSort(array, start, middle);
	array = quickSort(array, middle + 1, end);
	return array;
}

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
 			leaders = quickSort(leaders);
 			for (var i = 0; i < leaders.length; i++) {
 				leaderBoard.push(
 						<li key={i}>{leaders[i][0]} ---- {leaders[i][1]}</li>
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