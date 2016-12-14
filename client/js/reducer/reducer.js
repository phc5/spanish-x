import actions from '../actions/actions';

const initialState = {
	questions: [],
	answer: null,
	outcome: null
}
const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.FETCH_QUESTIONS_SUCCESS) {
		state.questions = state.questions.concat(action.questions);
	} else if (action.type === actions.SUBMIT_SUCCESS) {
		state.questions.shift();
		state.questions = state.questions.concat(action.answer);
		if (action.answer.outcome) {
			state.outcome = true
		} else {
			state.outcome = false
		}
	}

	return state;
}

exports.gameReducer = gameReducer;