(function() {
  angular.module('todoApp').service('userService', ['$http', '$window', '$rootScope', userService]);

  function userService($http, $window, $rootScope) {
    var service = {
      user: null,
      registerUser: registerUser,
      loginUser: loginUser,
      saveUser: saveUser,
      getUserFromlocalStorage: getUserFromlocalStorage,
      userLogout: userLogout,
      additionalInfoUser: additionalInfoUser,
      regexName: /^([а-яё]+|[a-z]+)$/i,
      regexPass: /^[a-z0-9_-]{3,16}$/,
      regexEmail: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
    };
    if (service.user === null) {
      service.user = getUserFromlocalStorage();
    }

    return service;

    function registerUser(data) {
      return $http.post('/registerUser', data).then(function(response) {
        if (typeof response.data !== 'string') {
          saveUser(response.data);
          service.user = getUserFromlocalStorage();
        }
        return response;
      });
    }

    function loginUser(data) {
      var $ctrl = this;
      return $http.post('/login', data).then(function(response) {
        if (typeof response.data !== 'string') {
          saveUser(response.data);
          service.user = getUserFromlocalStorage();
          $rootScope.user = service.user;
          console.log('$rootScope', $rootScope);
        }
        return response;
      });
    }

    function saveUser(user) {
      var serialUser = JSON.stringify(user);
      $window.localStorage.setItem('user-token', serialUser);
    }

    function getUserFromlocalStorage() {
      return JSON.parse($window.localStorage.getItem('user-token'));
    }

    function userLogout() {
      service.user = null;
      return $window.localStorage.removeItem('user-token');
    }

    function additionalInfoUser(user) {
      service.user = Object.assign(service.user, user);
      saveUser(service.user);

      //return $http.put('/users/' + service.user._id, service.user);
    }
  }
})();
