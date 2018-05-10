(function() {
  angular.module('todoApp').service('userService', ['$http', 'session', userService]);

  function userService($http, session) {
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
      return $http.post('/login', data).then(function(resp) {
        console.log('resp', resp);
        session.create(resp.data);
        return resp;
      });
    }

    function saveTolocalStorage(user) {
      var serialUser = JSON.stringify(user);
      localStorage.setItem('user-token', serialUser);
    }

    function getUserFromlocalStorage() {
      return JSON.parse(localStorage.getItem('user-token'));
    }

    function userLogout() {
      return localStorage.removeItem('user-token');
    }
  }
})();
