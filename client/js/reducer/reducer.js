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
	} else if (action.type === actions.ANSWER_SUCCESS) {
		state.answer = action.answer;
	}

	return state;
}

exports.gameReducer = gameReducer;