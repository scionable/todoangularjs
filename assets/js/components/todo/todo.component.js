(function() {
  angular.module("todoApp").component("todo", {
    // bindings: {
    //   allTasks: "<"
    // },
    templateUrl: "/js/components/todo/todo.template.html",
    controller: ("tasksController", ["taskService", "$scope", tasksController])
  });

  function tasksController(taskService, $scope) {
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
    $ctrl.transformationTimeTask = transformationTimeTask;

    var now = new Date();
    $ctrl.task.remindTimeTask = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay(),
      now.getHours(),
      now.getMinutes()
    );

    taskService.getAllTasks().then(function(resp) {
      $ctrl.allTasks = resp.data;
      console.log("  $ctrl.allTasks", $ctrl.allTasks);
    });

    // function setDay(day) {
    //   $ctrl.activeTab = day;
    //   return $ctrl.activeTab;
    // }

    function transformationTimeTask(timeOfTask) {
      var data = new Date(timeOfTask);
      return (
        "    " +
        data.getDay() +
        "-" +
        (data.getMonth() + 1) +
        "-" +
        data.getFullYear() +
        "  Time:" +
        data.getHours() +
        ":" +
        data.getMinutes()
      );
    }

    function addNewTask(taskText, taskTime) {
      console.log("taskTime", taskTime);
      if (taskText === "") return;
      let data = {
        text: taskText,
        day: $ctrl.activeTab,
        remindTimeTask: taskTime
      };
      taskService.addTask(data).then(function(resp) {
        $ctrl.allTasks.push(resp.data);
        taskService.openRemindPopup(resp.data);
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
