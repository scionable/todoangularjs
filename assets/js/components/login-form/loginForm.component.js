(function() {
  angular.module('todoApp').component('loginForm', {
    templateUrl: 'js/components/login-form/loginForm.template.html',
    controller: ('loginFormController', ['userService', '$timeout', loginFormController])
  });

  function loginFormController(userService, $timeout) {
    let $ctrl = this;
    $ctrl.loginUser = loginUser;
    $ctrl.email = userService.regexEmail;
    $ctrl.pass = userService.regexPass;

    $ctrl.response = '';

    function clearForm() {
      $ctrl.user.name = '';
      $ctrl.user.email = '';
      $ctrl.user.password = '';
    }

    function loginUser(ev, data) {
      ev.preventDefault();
      userService.loginUser(data).then(function(response) {
        if (typeof response.data === 'string') {
          $ctrl.response = response.data;
        }
        $timeout(function() {
          $ctrl.response = '';
        }, 3000);
        clearForm();
      });
    }
  }
})();
