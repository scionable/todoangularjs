(function () {
	angular.module('todoApp').component('todo', {
		templateUrl: '/js/components/todo/todo.html',
		controller: ('AddUserController', ['userService', AddUserController])
	});

	function AddUserController(userService) {
		var $ctrl = this;
		$ctrl.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		$ctrl.activeTab = $ctrl.days[new Date().getDay()];

		$ctrl.getAllTasks = getAllTasks;
		$ctrl.addNewTask = addNewTask;
		$ctrl.tasksFilter = tasksFilter;

		$ctrl.getAllTasks();
		$ctrl.tasksFilter('Monday');


		//todo think how to refactor this
		function tasksFilter(criteria) {
			$ctrl.dayFilter = function () {
				if (criteria === 'Monday') return function (task) {
					return task.day === 'Monday';
				};
				if (criteria === 'Tuesday') return function (task) {
					return task.day === 'Tuesday';
				};
				if (criteria === 'Wednesday') return function (task) {
					return task.day === 'Wednesday';
				};
				if (criteria === 'Thursday') return function (task) {
					return task.day === 'Thursday';
				};
				if (criteria === 'Friday') return function (task) {
					return task.day === 'Friday';
				};
				if (criteria === 'Saturday') return function (task) {
					return task.day === 'Saturday';
				};
				if (criteria === 'Sunday') return function (task) {
					return task.day === 'Sunday';
				};
			}()
		}


		function getAllTasks() {
			userService.getAllTasks().then(function (resp) {
				$ctrl.allTasks = resp.data;
			})
		}

		function addNewTask(taskText) {
			if (taskText === '') return;
			var data = {task: taskText, done: 'false', day: $ctrl.activeTab};
			userService.addTask(data).then(getAllTasks);
			$ctrl.task.text = '';
		}

	}

})();
