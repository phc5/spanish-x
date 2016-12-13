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

const getParameterByName = (name, url) => {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const fetchQuestion = () => {
	return (dispatch) => {
		let access_token = getParameterByName('access_token');
		let url = "http://localhost:8080/questions";
		let auth = 'Bearer ' + access_token;
		const header = {
			Authorization: auth
		}
		return fetch(url, {
			header
		}).then((response) => {
			console.log("ASDFASDFADSFA");
			if (response.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((questions) => {
			console.log("!!!");
			console.log(questions);
			return dispatch(fetchQuestionsSuccess(questions));
		}).catch((err) => {
			console.log(err);
			return dispatch(fetchQuestionsError(err));
		})
	};
}


exports.FETCH_QUESTIONS_SUCCESS = FETCH_QUESTIONS_SUCCESS;
exports.fetchQuestionsSuccess = fetchQuestionsSuccess;

exports.FETCH_QUESTIONS_ERROR = FETCH_QUESTIONS_ERROR;
exports.fetchQuestionsError = fetchQuestionsError;

exports.fetchQuestion = fetchQuestion;