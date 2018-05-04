(function() {
  angular.module('todoApp').component('loginForm', {
    templateUrl: 'js/components/login-form/loginForm.template.html',
    controller: ('loginFormController', ['userService', '$timeout', '$rootScope', '$state', loginFormController])
  });

  function loginFormController(userService, $timeout, $rootScope, $state) {
    let $ctrl = this;
    $ctrl.loginUser = loginUser;
    $ctrl.email = userService.regexEmail;
    $ctrl.pass = userService.regexPass;

    $ctrl.errorMessage = '';

    function clearForm() {
      $ctrl.user.name = '';
      $ctrl.user.email = '';
      $ctrl.user.password = '';
    }

    function loginUser(ev, data) {
      ev.preventDefault();
      userService.loginUser(data).then(function(response) {
        if (typeof response.data === 'string') {
          $ctrl.errorMessage = response.data;
          $timeout(function() {
            $ctrl.errorMessage = '';
          }, 3000);
        } else {
          $rootScope.user = response.data;
          $state.go('home');
        }

        clearForm();
      });
    }
  }
})();
