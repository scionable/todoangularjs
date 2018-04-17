(function () {
	angular.module('todoApp')
		.service('taskService', ['$http', taskService]);

	function taskService($http) {

		var service = {
			addTask: addTask,
			getAllTasks: getAllTasks
		};
		return service;

		function getAllTasks() {
			return $http.get('getAllTasks')
		}

		function addTask(data) {
			return $http.post('createTask', data)
		}

	}
})();
