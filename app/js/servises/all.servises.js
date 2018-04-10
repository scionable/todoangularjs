angular.module('todoApp').service('allServises', addNewUser)

function allServises() {
  var someValue = ''
  var service = {
    create: createNewUser,
    read: readAllUsers,
    delete: deleteUsers
  }
  return service

  ////////////

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
