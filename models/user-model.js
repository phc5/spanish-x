const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	googleId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	accessToken: {
		type: String,
		required: true
	},
	score: {
		type: Number
	},
	questions: {
		type: Array
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;