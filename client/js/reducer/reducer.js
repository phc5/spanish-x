import actions from '../actions/actions';

const initialState = {
	questions: [],
	answer: null,
	outcome: null,
	users: []
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
	} else if (action.type === actions.RESET_SUCCESS) {
		state.questions = [];
		state.questions = state.questions.concat(action.questions);
		state.outcome = null;
	} else if (action.type === actions.SCORES_SUCCESS) {
		state.users = state.users.concat(action.users);
	}

	return state;
}

exports.gameReducer = gameReducer;