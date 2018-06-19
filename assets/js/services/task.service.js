(function() {
	angular.module("todoApp").service("taskService", taskService);

	taskService.$inject = ["$http", "popupService", "$q"];

	function taskService($http, popupService, $q) {
		var service = {
			addTask: addTask,
			getAllTasks: getAllTasks,
			deleteTask: deleteTask,
			changeTaskDone: changeTaskDone,
			openRemindPopup: openRemindPopup,
			getTaskById: getTaskById,
			checkActiveTaskAndShowReminder: checkActiveTaskAndShowReminder,
			handled: []
		};
		return service;

		function openRemindPopup() {
			popupService.openPopup("js/components/popup/popup.template.html");
		}

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

		function checkActiveTaskAndShowReminder() {
			return service.allTasks.forEach(function(element) {
				var taskTime = new Date(element.remindTimeTask);
				var now = new Date();
				var checkTime =
					taskTime.getFullYear() == now.getFullYear() &&
					taskTime.getDate() == now.getDate() &&
					taskTime.getMonth() == now.getMonth() &&
					taskTime.getHours() == now.getHours() &&
					taskTime.getMinutes() == now.getMinutes();

				if (checkTime && service.handled.indexOf(element) < 0) {
					service.handled.push(element);
					popupService.openPopup(
						"js/components/popup/popup.template.html",
						element
					);
					return false;
				}
			});
		}
	}
})();
