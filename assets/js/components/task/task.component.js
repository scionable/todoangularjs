(function() {
	angular.module("todoApp").controller("taskController", taskController);
});
taskController.$inject = ["$scope", "$stateParams", "taskService"];
function taskController($scope, $stateParams, taskService) {
	var $ctrl = this;

	taskService.getFindTaskById($stateParams.taskId).then(function(task) {
		$ctrl.task = task;
		debugger;
		console.log("1", $ctrl.task);
	});
	console.log("2", $ctrl.task);
}
