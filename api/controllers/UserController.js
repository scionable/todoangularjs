let User = require('../models/User');

module.exports = {
	register: register,
	login: login
};

function register(req, res) {
	let name = req.body.name || undefined;
	let email = req.body.email || undefined;
	let password = req.body.password || undefined;

	User.find({email: email}, (err, user) => {
		if (err) res.send(err);
		if (user.length) {
			res.send(`User with this email already exist`);
		} else {
			User.create({name: name, email: email, password: password}, (err, user) => {
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

	User.find({email: email, password: password}, (err, user) => {
		if (err) res.send(err);
		if (!user.length) {
			res.send(`Wrong credentials`);
		} else {
			res.send(user);
		}
	});
}