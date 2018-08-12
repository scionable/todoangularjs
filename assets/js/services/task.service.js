(function() {
	angular.module("todoApp").service("taskService", ["$http", "popupService", "$q", taskService]);

	function taskService($http, popupService, $q) {

		let service = {
			addTask: addTask,
			getAllTasks: getAllTasks,
			deleteTask: deleteTask,
			changeTaskDone: changeTaskDone,
			getTaskById: getTaskById
		};
		return service;

		function getAllTasks() {
			return $http.get("getAllTasks").then(function(resp) {
				service.allTasks = resp.data;
				return $q.resolve(resp);
			});
		}

		function addTask(data) {
			return $http.post("createTask", data);
		}

		function deleteTask(id) {
			return $http.delete("/tasks/" + id);
		}

		function changeTaskDone(data) {
			return $http.patch("/modifyTask", data);
		}

		function getTaskById(taskId) {
			return service.allTasks.filter(function (task) {
				return task._id === taskId;
			});
		}

	}
})();
