(function () {
	angular.module("todoApp").component("task", {
		templateUrl: "/js/components/task/task.template.html",
		controller: ('taskController', ["$stateParams", "taskService", taskController])
	});

	function taskController($stateParams, taskService) {
		var $ctrl = this;

		$ctrl.task = taskService.getTaskById($stateParams.taskId)[0];
	}

})();

