(function() {
  angular.module('todoApp').service('userService', ['$http', userService]);

  function userService($http) {
    var service = {
      registerUser: registerUser,
      loginUser: loginUser,
      regexName: /^([а-яё]+|[a-z]+)$/i,
      regexPass: /^[a-z0-9_-]{3,16}$/,
      regexEmail: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
    };

    return service;

    function registerUser(data) {
      return $http.post('/registerUser', data);
    }

    function loginUser(data) {
      return $http.post('/login', data);
    }
  }
})();
