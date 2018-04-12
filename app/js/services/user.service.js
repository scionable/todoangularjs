angular.module('todoApp').service('userService', [userService])
userService.$inject = ['$http', 'todo']

function userService($http) {
  var weakDaysURL = 'http://localhost:3000/WeekDays'
  var service = {
    createNewUser: createNewUser,
    readAllUsers: readAllUsers,
    deleteUsers: deleteUsers,
    getAllDays: getAllDays
  }
  return service

  var someValue = ''

  ////////////
  function getAllDays() {
    // return $http({
    //   method: 'GET',
    //   url: 'http://localhost:3000/WeekDays'
    // })
    return $http.get('http://localhost:3000/WeekDays')
  }
  function createNewUser(obj) {
    /* */
  }

  function readAllUsers() {
    /* */
  }

  function deleteUsers() {
    /* */
  }
}
