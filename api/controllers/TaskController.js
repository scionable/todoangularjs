let Task = require('../models/Task');

module.exports = {
	getAllTasks: getAllTasks,
	createTask: createTask,
	deleteTask: deleteTask,
	modifyTask: modifyTask
};

function getAllTasks(req, res) {
	Task.find((err, todos) => {
		if (err) res.send(err);

		res.json(todos);
	});
}

function createTask(req, res) {
	Task.create({text: req.body.text, day: req.body.day, done: false}, (err, todo) => {
			if (err) res.send(err);
			res.json(todo);
		}
	);
}

function deleteTask(req, res) {
	Task.remove({_id: req.params.todo_id}, (err) => {
			if (err) res.send(err);

			getAllTasks(req, res);
		}
	);
}

function modifyTask(req, res) {
	Task.findByIdAndUpdate({_id: req.body.id}, {$set: {done: req.body.done}}, {new: true}, (err, task) => {
		if (err) res.send(err);
		res.send(task);
	});
}