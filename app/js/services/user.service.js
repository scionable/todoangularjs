angular.module('todoApp').service('userService', ['$http', userService])
// userService.$inject = ['$http']

function userService($http) {
  var weakDaysURL = 'http://localhost:3000/WeekDays'
  var service = {
    addParagraph: addParagraph,
    readAllUsers: readAllUsers,
    deleteUsers: deleteUsers,
    getAllDays: getAllDays
  }
  return service

  function getAllDays() {
    return $http.get('http://localhost:3000/WeekDays')
  }
  function addParagraph(data) {
    console.log(data)
    return $http.post('http://localhost:3000/WeekDays', data)
  }

  function readAllUsers() {
    /* */
  }

  function deleteUsers() {
    /* */
  }
}
