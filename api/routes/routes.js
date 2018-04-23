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
		Task.create({
			text: req.body.text,
			day: req.body.day,
			done: false
		}, function (err, todo) {
			if (err) res.send(err);
			res.json(todo);
		});
	});

	app.delete('/tasks/:todo_id', (req, res) => {
		Task.remove({
			_id: req.params.todo_id
		}, function (err, todo) {
			if (err) res.send(err);

			Task.find((err, todos) => {
				if (err) res.send(err);

				res.json(todos);
			});
		});
	});

	app.patch('/completeTask', (req, res) => {
		Task.findByIdAndUpdate({ _id: req.body.id }, { $set: { done: req.body.done }}, { new: true }, function (err, task) {
			if (err) res.send(err);
			res.send(task);
		});
	});


	app.post('registerUser', (req, res) => {
		User.find((err, todos) => {
			if (err) res.send(err);

			res.json(todos);
		});



		User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		}, function (err, user) {
			if (err) res.send(err);
			res.json(user);
		});
	});






	app.get('*', (req, res) => {
		res.sendfile('./assets/index.html');
	});

};
