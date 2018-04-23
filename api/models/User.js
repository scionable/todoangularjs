const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

const UserSchema = mongoose.Schema({
	name : String,
	email: String,
	password: String,
	isLoggedIn: Boolean
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);

module.exports = User;