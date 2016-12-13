import actions from '../actions/actions';

const initialState = {
	questions: []
}
const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.FETCH_QUESTIONS_SUCCESS) {
		let questions = [];
		for (var i = 0; i < action.questions.length; i++) {
			questions.push(action.questions[i]);
		}
		state.questions = state.questions.concat(questions);
	}

	return state;
}

exports.gameReducer = gameReducer;