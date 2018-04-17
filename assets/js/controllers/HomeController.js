angular.module('todoApp')
	.controller('HomeController', ['getAllTasks', HomeController]);

function HomeController(getAllTasks) {
	var $ctrl = this;
	$ctrl.days = getAllTasks;
}
