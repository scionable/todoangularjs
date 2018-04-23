(function() {
  angular.module('todoApp').component('todo', {
    templateUrl: '/js/components/todo/todo.template.html',
    bindings: {
      tasks: '<'
    },
    controller: ('tasksController', ['taskService', tasksController])
  });

  function tasksController(taskService) {
    var $ctrl = this;
    $ctrl.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    $ctrl.activeTab = $ctrl.days[new Date().getDay()];

    $ctrl.getAllTasks = getAllTasks;
    $ctrl.addNewTask = addNewTask;
    $ctrl.deleteTask = deleteTask;
    $ctrl.changeTaskDone = changeTaskDone;
    $ctrl.countTask = countTask;

    $ctrl.getAllTasks();

    function getAllTasks() {
      taskService.getAllTasks().then(function(resp) {
        $ctrl.allTasks = resp.data;
      });
    }

    function addNewTask(taskText) {
      if (taskText === '') return;
      var data = { text: taskText, day: $ctrl.activeTab };
      taskService.addTask(data).then(function(resp) {
        $ctrl.allTasks.push(resp.data);
      });
    }

    function deleteTask(id) {
      taskService.deleteTask(id).then(function(response) {
        $ctrl.allTasks = response.data;
      });
    }

    function changeTaskDone(taskId, done) {
      //taskService.changeTaskDone({ id: taskId, done: done });
    }

    function countTask(day) {
      let countEachTask = 0;
      this.tasks.filter(function(iter) {
        if (iter.day === day) {
          countEachTask++;
        }
      });
      return countEachTask;
    }
  }
})();
