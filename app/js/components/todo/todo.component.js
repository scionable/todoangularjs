;(function() {
  angular.module('todoApp').component('todo', {
    templateUrl: '/js/components/todo/todo.html',
    controller: ('AddUserController', ['userService', AddUserController])
  })

  function AddUserController(userService, $http) {
    var $ctrl = this

    $ctrl.name = ''
    $ctrl.response
    $ctrl.listToDo
    $ctrl.activeTab
    userService
      .getAllDays()
      .success(function(response) {
        $ctrl.response = response
        for (var key in $ctrl.response) {
          if (key === '0') {
            $ctrl.listToDo = $ctrl.response[key].todo
            $ctrl.activeTab = $ctrl.response[key].day
          }
        }
      })
      .error(function(error) {
        console.log('Something went wrong with request')
      })
    $ctrl.showTabs = function(data) {
      $ctrl.listToDo = data.todo
      $ctrl.activeTab = data.day
    }
    $ctrl.addNewTask = function(text) {
      // console.log('  $ctrl.listToDo', $ctrl.listToDo)
      // console.log('  $ctrl.activeTab', $ctrl.activeTab)
      // console.log('text', text)
      if (text != '') {
        $ctrl.listToDo.push({
          do: text,
          done: 'false'
        })
        userService.addParagraph({
          day: $ctrl.activeTab,
          todo: $ctrl.listToDo
        })
      }
    }
  }
})()
