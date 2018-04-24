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
		Task.create({text: req.body.text, day: req.body.day, done: false}, (err, todo) => {
				if (err) res.send(err);
				res.json(todo);
			}
		);
	});

	app.delete('/tasks/:todo_id', (req, res) => {
		Task.remove({_id: req.params.todo_id}, (err, todo) => {
				if (err) res.send(err);

				Task.find((err, todos) => {
					if (err) res.send(err);

					res.json(todos);
				});
			}
		);
	});

	app.patch('/completeTask', (req, res) => {
		Task.findByIdAndUpdate({_id: req.body.id}, {$set: {done: req.body.done}}, {new: true}, (err, task) => {
			if (err) res.send(err);
			res.send(task);
		});
	});

	app.post('/registerUser', (req, res) => {
		let name = req.body.name || undefined;
		let email = req.body.email || undefined;
		let password = req.body.password || undefined;

		User.find({email: email}, (err, user) => {
			if (err) res.send(err);
			if(user.length) {
				res.send(`${user} with this email already exist`);
			} else {
				User.create({name: name, email: email, password: password}, (err, user) => {
						if (err) res.send(err);
						res.json(user);
					}
				);
			}
		});
	});

	app.get('*', (req, res) => {
		res.sendfile('./assets/index.html');
	});

};
