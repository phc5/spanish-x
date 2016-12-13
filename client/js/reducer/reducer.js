import actions from '../actions/actions';

const initialState = {
	questions: []
}
const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.FETCH_QUESTIONS_SUCCESS) {
		state.questions = state.questions.concat(action.questions);
	}

	return state;
}

exports.gameReducer = gameReducer;