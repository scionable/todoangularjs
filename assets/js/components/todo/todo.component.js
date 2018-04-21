(function () {
	angular.module('todoApp').component('todo', {
		bindings: {
			allTasks: '<'
		},
		templateUrl: '/js/components/todo/todo.template.html',
		controller: ('tasksController', ['taskService', tasksController])
	});

	function tasksController(taskService) {
		let $ctrl = this;
		$ctrl.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		$ctrl.activeTab = $ctrl.days[new Date().getDay()];

		$ctrl.addNewTask = addNewTask;
		$ctrl.deleteTask = deleteTask;
		$ctrl.countTask = countTask;
		$ctrl.changeTaskDone = changeTaskDone;

		function addNewTask(taskText) {
			if (taskText === '') return;
			let data = {text: taskText, day: $ctrl.activeTab};
			taskService.addTask(data).then(function (resp) {
				$ctrl.allTasks.push(resp.data)
			})
		}

		//todo refactor letiable names and debug this method, think how to optimaze it
		function countTask(day) {
			let i = 0;
			$ctrl.allTasks.filter(function (iter) {
				if (iter.day === day) {
					i++
				}
			})
			return i
		}
		
		function deleteTask(id) {
			taskService.deleteTask(id).then(function(response){
				
				$ctrl.allTasks = response.data
			})
		}

		function changeTaskDone(taskId, done) {
			taskService.changeTaskDone({id: taskId, done: done});
		}

	}

})();
