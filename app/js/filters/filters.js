angular.module('todoApp')
	.filter('tasksFilter', function () {
		return function (tasks, filterFn) {
			if(!tasks) return;
			return tasks.filter(filterFn)
		};
	});