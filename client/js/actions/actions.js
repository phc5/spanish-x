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

const fetchQuestion = () => {
	return (dispatch) => {	
		let url = 'http://localhost:8080/questions';
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
		let url = 'http://localhost:8080/questions';
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
			console.log(answer);
			return dispatch(submitSuccess(answer));
		}).catch((err) => {
			console.log(err);
			return dispatch(submitError(err));
		});
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