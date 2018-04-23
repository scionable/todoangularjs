(function() {
  angular.module('todoApp').service('taskService', ['$http', taskService]);

  function taskService($http) {
    var service = {
      addTask: addTask,
      getAllTasks: getAllTasks,
      deleteTask: deleteTask,
      changeTaskDone: changeTaskDone
    };
    return service;

    function getAllTasks() {
      return $http.get('getAllTasks');
    }

    function addTask(data) {
      return $http.post('createTask', data);
    }
    function deleteTask(id) {
      return $http.delete('/tasks/' + id);
    }
    function changeTaskDone(data) {
      return $http.patch('/completeTask', data);
    }
  }
})();
