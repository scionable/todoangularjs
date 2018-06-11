(function() {
  angular
    .module("todoApp")
    .service("taskService", ["$http", "popupService", taskService]);

  function taskService($http, popupService) {
    var service = {
      addTask: addTask,
      getAllTasks: getAllTasks,
      deleteTask: deleteTask,
      changeTaskDone: changeTaskDone,
      openRemindPopup: openRemindPopup
    };
    return service;

    function openRemindPopup(allTasks) {
      popupService.openPopup("js/components/popup/popup.template.html");
      console.log(allTasks);
      //allTasks.forEach(function(elem) {
      //     data.getDay()
      //    data.getMonth()
      //     data.getFullYear()
      //     data.getHours()
      //     data.getMinutes()
      // });
    }
    function getAllTasks() {
      return $http.get("getAllTasks");
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
  }
})();
