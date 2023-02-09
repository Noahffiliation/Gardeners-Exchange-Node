const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String },
	bio: { type: String }
});

module.exports = mongoose.model('Account', AccountSchema);
