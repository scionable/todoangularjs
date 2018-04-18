(function () {
	angular.module('todoApp').component('todo', {
		templateUrl: '/js/components/todo/todo.template.html',
		controller: ('tasksController', ['taskService', tasksController])
	});
	
	function tasksController(taskService) {
		var $ctrl = this;
		$ctrl.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		
		$ctrl.activeTab = $ctrl.days[new Date().getDay()];
		
		$ctrl.getAllTasks = getAllTasks;
		$ctrl.addNewTask = addNewTask;
		$ctrl.deleteTask = deleteTask;
		$ctrl.showCountTask = showCountTask;
		
		$ctrl.getAllTasks();
		
		function getAllTasks() {
			taskService.getAllTasks().then(function (resp) {
				$ctrl.allTasks = resp.data;
			})
		}
		
		function addNewTask(taskText) {
			if (taskText === '') return;
			var data = { text: taskText, day: $ctrl.activeTab };
			taskService.addTask(data).then(function (resp) {
				$ctrl.allTasks.push(resp.data);
			});
		}
		function showCountTask() {
			// return $ctrl.allTasks
		}
		
		function deleteTask(id) {
			taskService.deleteTask(id).then(function(response){
				
				$ctrl.allTasks = response.data
			})
		}
		
	}
	
})();
