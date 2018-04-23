let Task = require('../models/Task');
let User = require('../models/User');

module.exports = function (app) {

	app.get('/getAllTasks', (req, res) => {
		Task.find((err, todos) => {
			if (err) res.send(err);

			res.json(todos);
		});
	});

	app.post('/createTask', (req, res) => {
		Task.create(
			{
				text: req.body.text,
				day: req.body.day,
				done: false
			},
			function (err, todo) {
				if (err) res.send(err);
				res.json(todo);
			}
		);
	});

	app.delete('/tasks/:todo_id', (req, res) => {
		Task.remove(
			{
				_id: req.params.todo_id
			},
			function (err, todo) {
				if (err) res.send(err);

				Task.find((err, todos) => {
					if (err) res.send(err);

					res.json(todos);
				});
			}
		);
	});

	app.get('*', (req, res) => {
		res.sendfile('./assets/index.html');
	});

	app.patch('/completeTask', (req, res) => {
		Task.findByIdAndUpdate({_id: req.body.id}, {$set: {done: req.body.done}}, {new: true}, function (err, task) {
			if (err) res.send(err);
			res.send(task);
		});
	});

	app.post('/registerUser', (req, res) => {
		let name = req.body.name || undefined;
		let email = req.body.email || undefined;
		let password = req.body.password || undefined;

		User.findOrCreate({name: name, email: email, password: password}, function(err, user, created) {
			if(err) res.send(err);
			if(!created) {
				res.send(`${user} already exist`);
			} else {
				res.json(user);
				console.log('A new user been created');
			}
		});
	});

	app.get('*', (req, res) => {
		res.sendfile('./assets/index.html');
	});

};
