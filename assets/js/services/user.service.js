(function() {
  angular.module('todoApp').service('userService', ['$http', '$window', userService]);

  function userService($http, $window) {
    var service = {
      registerUser: registerUser,
      loginUser: loginUser,
      saveTolocalStorage: saveTolocalStorage,
      getUserFromlocalStorage: getUserFromlocalStorage,
      userLogout: userLogout,
      fileUpload: fileUpload,
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
    function fileUpload() {
      return (this.uploadFileToUrl = function(file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);

        $http
          .post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
          })

          .success(function() {})

          .error(function() {});
      });
    }
  }
})();
