const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

const UserSchema = mongoose.Schema({
	name : String,
	email: String,
	password: String,
	aboutme: String,
	avatar: String,
	screenName: String
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);

module.exports = User;