;(function() {
  angular.module('todoApp').component('todo', {
    templateUrl: '/js/components/todo/todo.html',
    controller: ('AddUserController', ['userService', AddUserController])
  })

  function AddUserController(userService, $http) {
    var $ctrl = this

    $ctrl.allTask = []
    $ctrl.todo = ''
    //  $http.get('http://localhost:3000/WeekDays').then(function(resp) {
    //     console.log('resp', resp)
    //   })
    $ctrl.response = userService.getAllDays()
    console.log('$ctrl.response', $ctrl.response)
    $ctrl.addObjUser = function(todo) {
      $ctrl.allTask.push({
        todo: todo
      })

      console.log('userService', userService)
    }
  }
})()
