(function () {
	angular.module('todoApp').service('userService', ['$http', userService]);

	function userService($http) {

		var service = {
			addTask: addTask,
			getAllTasks: getAllTasks
		};
		return service;

		function getAllTasks() {
			return $http.get('http://localhost:3000/Tasks')
		}

		function addTask(data) {
			return $http.post('http://localhost:3000/Tasks', data)
		}

	}
})();
