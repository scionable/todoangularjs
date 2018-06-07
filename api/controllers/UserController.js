let User = require('../models/User');
let imageService = require('../services/imageService');

module.exports = {
	register: register,
	login: login,
	updateUserInfo: updateUserInfo
};

function register(req, res) {
	let name = req.body.name || undefined;
	let email = req.body.email || undefined;
	let password = req.body.password || undefined;

	User.findOne({email: email}, (err, user) => {
		if (err) res.send(err);
		if (user) {
			res.send(`User with this email already exist`);
		} else {
			User.create(
				{
					name: name,
					email: email,
					password: password,
					aboutme: '',
					avatar: imageService.setDefaultAvatar(name),
					screenName: `@${name.toLocaleLowerCase()}`
				}, (err, user) => {
					if (err) res.send(err);
					res.json(user);
				}
			);
		}
	});
}

function login(req, res) {
	let email = req.body.email || undefined;
	let password = req.body.password || undefined;

	User.findOne({email: email, password: password}, (err, user) => {
		if (err) res.send(err);
		user ? res.send(user) : res.send(`Wrong credentials`);
	});
}

function updateUserInfo(req, res) {
	const {aboutme, displayAvatar: avatar, screenName, name} = req.body;
	User.findOneAndUpdate(
		{_id: req.body.id},
		{
			$set: {
				aboutme: aboutme,
				avatar: avatar,
				screenName: screenName,
				name: name
			}
		},
		{new: true}, (err, user) => {
			if (err) res.send(err);
			res.send(user);
		});

}