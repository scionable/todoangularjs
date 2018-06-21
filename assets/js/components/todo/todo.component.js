(function() {
	angular.module("todoApp").component("todo", {
		templateUrl: "/js/components/todo/todo.template.html",
		controller: ("tasksController", ["taskService", "$state", "$interval", tasksController])
	});

	function tasksController(taskService, $state, $interval) {
		let $ctrl = this;
		$ctrl.days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
		$ctrl.activeTab = $ctrl.days[new Date().getDay()];
		$ctrl.allTasks = null;
		$ctrl.task = {};
		$ctrl.addNewTask = addNewTask;
		$ctrl.deleteTask = deleteTask;
		$ctrl.countTasks = countTasks;
		$ctrl.changeTaskDone = changeTaskDone;
		$ctrl.goToPageTask = goToPageTask;

		// var now = new Date();

		$ctrl.task.remindTimeTask = new Date().getTime();

		taskService.getAllTasks().then(function(resp) {
			$ctrl.allTasks = resp.data;
		});

		var interval = $interval(function() {
			if (taskService.popup) {
				$interval.cancel(interval);
			}
			taskService.checkActiveTaskAndShowReminder();
		}, 1000);
		//>>>>> didn`t work didn`t see all time taskService.popup

		// function setDay(day) {
		//   $ctrl.activeTab = day;
		//   return $ctrl.activeTab;
		// }
		function goToPageTask(task) {
			$state.go("taskInfo", { taskId: task._id });
			// taskService.getFindTaskById($stateParams.taskId);
		}

		function addNewTask(taskText, taskTime) {
			if (taskText === "") return;
			let data = {
				text: taskText,
				day: $ctrl.activeTab,
				remindTimeTask: taskTime.toISOString()
			};

			taskService.addTask(data).then(function(resp) {
				$ctrl.allTasks.push(resp.data);
			});
		}
		function filterTasks(day) {
			if (!!$ctrl.allTasks) {
				return $ctrl.allTasks.filter(function(task) {
					return task.day === day;
				});
			}
			return [];
		}
		function countTasks(day) {
			return filterTasks(day).length;
		}

		function deleteTask(id) {
			taskService.deleteTask(id).then(function(response) {
				$ctrl.allTasks = response.data;
			});
		}

		function changeTaskDone(taskId, done) {
			taskService.changeTaskDone({ id: taskId, done: done });
		}
	}
})();
