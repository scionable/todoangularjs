let UserController = require('../controllers/UserController');

module.exports = function (app) {

	app.post('/registerUser', (req, res) => {
		UserController.register(req, res);
	});

	app.post('/login', (req, res) => {
		UserController.login(req, res);
	});

};

