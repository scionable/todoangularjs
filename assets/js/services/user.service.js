angular.module('todoApp').service('usersService', ['$http', usersService])

function usersService($http) {
  var allUsers = {
    addNewUser: addNewUser
  }
  return allUsers
  function addNewUser(data) {
    return $http.post('createTask', data)
  }
}
