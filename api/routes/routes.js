let Task = require('../models/Task');

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


	app.get('*', (req, res) => {
		res.sendfile('./assets/index.html');
	});

};
