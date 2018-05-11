(function() {
  angular.module('todoApp').service('userService', ['$http', '$window', userService]);

  function userService($http, $window) {
    var service = {
      registerUser: registerUser,
      loginUser: loginUser,
      saveTolocalStorage: saveTolocalStorage,
      getUserFromlocalStorage: getUserFromlocalStorage,
      userLogout: userLogout,
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

    function saveTolocalStorage(user) {
      var serialUser = JSON.stringify(user);
      $window.localStorage.setItem('user-token', serialUser);
    }

    function getUserFromlocalStorage() {
      return JSON.parse($window.localStorage.getItem('user-token'));
    }

    function userLogout() {
      return localStorage.removeItem('user-token');
    }
  }
})();
