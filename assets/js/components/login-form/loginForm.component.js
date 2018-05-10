(function() {
  angular.module('todoApp').component('loginForm', {
    templateUrl: 'js/components/login-form/loginForm.template.html',
    controller: ('loginFormController', ['userService', 'helperService', '$timeout', '$rootScope', '$state', loginFormController])
  });

  function loginFormController(userService, helperService, $timeout, $rootScope, $state) {
    let $ctrl = this;
    $ctrl.loginUser = loginUser;
    $ctrl.email = userService.regexEmail;
    $ctrl.pass = userService.regexPass;

    function loginUser(ev, data) {
      ev.preventDefault();
      userService
        .loginUser(data)
        .then(function(response) {
          if (typeof response.data === 'string') {
            $ctrl.errorMessage = response.data;
            helperService.hideErrorMessage($ctrl.errorMessage);
          } else {
            userService.saveTolocalStorage(response.data);
            $state.go('home');
          }
          return response.data;
        })
        .then(function() {
          helperService.clearForm($ctrl.user);
        });
    }
  }
})();
