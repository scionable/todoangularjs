angular.module('todoApp')
	.filter('tasksFilter', function () {
		return function (tasks, currentDay) {
			if (!tasks) return;
			return tasks.filter(function (task) {
				return task.day === currentDay;
			});
		};
	});