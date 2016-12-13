const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	word: {
		type: String,
		required: true
	},
	translation: {
		type: String,
		required: true
	}
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;