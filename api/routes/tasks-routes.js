let TaskController = require('../controllers/TaskController');

module.exports = function (app) {

	app.get('/getAllTasks', (req, res) => {
		TaskController.getAllTasks(req, res);
	});

	app.post('/createTask', (req, res) => {
		TaskController.createTask(req, res);
	});

	app.delete('/tasks/:todo_id', (req, res) => {
		TaskController.deleteTask(req, res);
	});

	app.patch('/modifyTask', (req, res) => {
		TaskController.modifyTask(req, res);
	});

};

