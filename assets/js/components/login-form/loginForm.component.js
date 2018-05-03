(function() {
  angular.module('todoApp').component('loginForm', {
    templateUrl: 'js/components/login-form/loginForm.template.html',
    controller: ('loginFormController', ['userService', '$scope', loginFormController])
  });

  function loginFormController(userService, $scope) {
    let $ctrl = this;
    $ctrl.loginUser = loginUser;
    $ctrl.email = userService.regexEmail;
    $ctrl.pass = userService.regexPass;

    $ctrl.worning = false;

    function cleanInput() {
      $ctrl.user.name = '';
      $ctrl.user.email = '';
      $ctrl.user.password = '';
    }

    function loginUser(ev, data) {
      ev.preventDefault();
      userService.loginUser(data).then(function(response) {
        console.log('resp', response);
        if (typeof response.data === 'string') {
          $ctrl.worning = true;
        }
        cleanInput();
      });
    }
  }
})();
