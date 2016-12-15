import fetch from 'isomorphic-fetch';

const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
const fetchQuestionsSuccess = (questions) => {
	return {
		type: FETCH_QUESTIONS_SUCCESS,
		questions: questions
	};
};

const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
const fetchQuestionsError = (err) => {
	return {
		type: FETCH_QUESTIONS_ERROR,
		error: err
	}
}

const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
const submitSuccess = (answer) => {
	return {
		type: SUBMIT_SUCCESS,
		answer: answer
	};
};

const SUBMIT_ERROR = 'SUBMIT_ERROR';
const submitError = (err) => {
	return {
		type: SUBMIT_ERROR,
		error: err
	}
}

const RESET_SUCCESS = 'RESET_SUCCESS';
const resetSuccess = (questions) => {
	return {
		type: RESET_SUCCESS,
		questions: questions
	};
};

const RESET_ERROR = 'RESET_ERROR';
const resetError = (err) => {
	return {
		type: RESET_ERROR,
		error: err
	}
}

const SCORES_SUCCESS = 'SCORES_SUCCESS';
const getScoresSuccess = (users) => {
	return {
		type: SCORES_SUCCESS,
		users: users
	};
};

const SCORES_ERROR = 'SCORES_ERROR';
const getScoresError = (err) => {
	return {
		type: SCORES_ERROR,
		error: err
	}
}

const fetchQuestion = () => {
	return (dispatch) => {	
		let url = 'https://spanishx.herokuapp.com/questions';
		return fetch(url, {
			headers: {
				Authorization: `Bearer ${TOKEN}`
			}
		}).then((response) => {
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((questions) => {
			return dispatch(fetchQuestionsSuccess(questions));
		}).catch((err) => {
			console.log(err);
			return dispatch(fetchQuestionsError(err));
		})
	};
}

const submitAnswer = (answer) => {
	return (dispatch) => {
		let url = 'https://spanishx.herokuapp.com/questions';
		return fetch(url, {
			body: JSON.stringify(answer),
			method: 'POST',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((answer) => {
			return dispatch(submitSuccess(answer));
		}).catch((err) => {
			console.log(err);
			return dispatch(submitError(err));
		});
	}
}

const reset = () => {
	return (dispatch) => {
		let url = 'https://spanishx.herokuapp.com/users';
		return fetch(url, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${TOKEN}`
			}
		}).then((response) => {
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((questions) => {
			return dispatch(resetSuccess(questions));
		}).catch((err) => {
			return dispatch(resetError(err));
		})
	}
}

const getScores = () => {
	return (dispatch) => {
		let url = 'https://spanishx.herokuapp.com/users';
		return fetch(url, {
			mode: 'no-cors'
		}).then((response) => {
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then ((users) => {
			console.log("in here");
			return dispatch(getScoresSuccess(users));
		}).catch((err) => {
			return dispatch(resetError(err));
		})
	}
}

exports.FETCH_QUESTIONS_SUCCESS = FETCH_QUESTIONS_SUCCESS;
exports.fetchQuestionsSuccess = fetchQuestionsSuccess;
exports.FETCH_QUESTIONS_ERROR = FETCH_QUESTIONS_ERROR;
exports.fetchQuestionsError = fetchQuestionsError;

exports.fetchQuestion = fetchQuestion;

exports.SUBMIT_SUCCESS = SUBMIT_SUCCESS;
exports.submitSuccess = submitSuccess;
exports.SUBMIT_ERROR = SUBMIT_ERROR;
exports.submitError = submitError;

exports.submitAnswer = submitAnswer;

exports.RESET_SUCCESS = RESET_SUCCESS;
exports.resetSuccess = resetSuccess;
exports.RESET_ERROR = RESET_ERROR;
exports.resetError = resetError;
exports.reset = reset;

exports.SCORES_SUCCESS = SCORES_SUCCESS;
exports.getScoresSuccess = getScoresSuccess;
exports.SCORES_ERROR = SCORES_ERROR;
exports.getScoresError = getScoresError;
exports.getScores = getScores;