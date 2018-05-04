(function() {
  angular.module('todoApp').component('registrationForm', {
    templateUrl: 'js/components/registration-form/registrationForm.template.html',
    controller: ('registrationFormController', ['userService', '$timeout', '$rootScope', '$state', registrationFormController])
  });

  function registrationFormController(userService, $timeout, $rootScope, $state) {
    let $ctrl = this;
    $ctrl.registerUser = registerUser;

    $ctrl.name = userService.regexName;
    $ctrl.pass = userService.regexPass;
    $ctrl.email = userService.regexEmail;

    $ctrl.errorMessage = '';

    function clearForm() {
      $ctrl.user.name = '';
      $ctrl.user.email = '';
      $ctrl.user.password = '';
    }

    function registerUser(ev, newUser) {
      ev.preventDefault();
      userService
        .registerUser(newUser)

        .then(function(response) {
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
        })
        .catch(function(err) {
          console.log('Error now is:', err);
        });
    }
  }
})();
