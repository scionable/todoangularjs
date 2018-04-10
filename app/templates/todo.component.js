;(function() {
  angular.module('todoApp').component('addUser', {
    templateUrl: 'js/templates/todo.html',
    controller: ('AddUserController', AddUserController)
  })

  function AddUserController($scope, $log) {
    var $ctrl = this
    $ctrl.users = []
    $ctrl.name = 'userName'
    $ctrl.log = 'userLog'
    $scope.$watch('$ctrl.log', function(current, original) {
      $log.info('vm.title was %s', original)
      $log.info('vm.title is now %s', current)
      $log.info('$ctrl.log', $ctrl.log)
    })
    $ctrl.addObjUser = function(name, password) {
      var objUser = {
        name: name,
        pass: password
      }
      console.log(name, password)
      //   $ctrl.users.push(objUser)
    }
  }
})()
