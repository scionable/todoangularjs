(function () {
	angular.module("todoApp").component("todo", {
		templateUrl: "/js/components/todo/todo.template.html",
		controller: ("tasksController", ["taskService", "$state", 'toastr', tasksController])
	});

	function tasksController(taskService, $state, toastr) {
		let $ctrl = this;
		$ctrl.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		$ctrl.activeTab = $ctrl.days[new Date().getDay()];
		$ctrl.allTasks = null;
		$ctrl.task = {};
		$ctrl.addNewTask = addNewTask;
		$ctrl.deleteTask = deleteTask;
		$ctrl.countTasks = countTasks;
		$ctrl.changeTaskDone = changeTaskDone;
		$ctrl.goToPageTask = goToPageTask;

		taskService.getAllTasks().then(function(resp) {
			$ctrl.allTasks = resp.data;
		});

		$ctrl.task.remindTimeTask = new Date().getTime();

		function goToPageTask(task) {
			$state.go("taskInfo", {taskId: task._id});
		}

		function addNewTask(taskText) {
			if (!taskText) {
				toastr.error('The task should have text', "Success!");
				return;
			}
			let data = {
				text: taskText,
				day: $ctrl.activeTab
			};

			taskService.addTask(data).then(function (resp) {
				$ctrl.allTasks.push(resp.data);
			});
		}

		function filterTasks(day) {
			if (!!$ctrl.allTasks) {
				return $ctrl.allTasks.filter(function (task) {
					return task.day === day;
				});
			}
			return [];
		}

		function countTasks(day) {
			return filterTasks(day).length;
		}

		function deleteTask(id) {
			taskService.deleteTask(id).then(function (response) {
				$ctrl.allTasks = response.data;
			});
		}

		function changeTaskDone(taskId, done) {
			taskService.changeTaskDone({id: taskId, done: done});
		}
	}
})();
