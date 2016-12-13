import actions from '../actions/actions';

const initialState = {
	questions: [],
	answer: null
}
const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.FETCH_QUESTIONS_SUCCESS) {
		state.questions = state.questions.concat(action.questions);
		console.log(state.questions);
	} else if (action.type === actions.SUBMIT_SUCCESS) {
		state.questions.shift();
		state.questions = state.questions.concat(action.answer);
		console.log(state.questions);
	}

	return state;
}

exports.gameReducer = gameReducer;