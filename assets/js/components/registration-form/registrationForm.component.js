(function() {
  angular.module('todoApp').component('registrationForm', {
    templateUrl: 'js/components/registration-form/registrationForm.template.html',
    controller: ('registrationFormController', ['userService', '$timeout', registrationFormController])
  });

  function registrationFormController(userService, $timeout) {
    let $ctrl = this;
    $ctrl.registerUser = registerUser;

    $ctrl.user = {};
    $ctrl.response = '';
    $ctrl.name = userService.regexName;
    $ctrl.pass = userService.regexPass;
    $ctrl.email = userService.regexEmail;

    function clearForm() {
      $ctrl.user.name = '';
      $ctrl.user.email = '';
      $ctrl.user.password = '';
    }

    function registerUser(newUser) {
      userService
        .registerUser(newUser)
        .then(function(response) {
          if (typeof response.data === 'string') {
            $ctrl.response = response.data;
            $timeout(function() {
              $ctrl.response = '';
            }, 3000);
          }
          clearForm();
        })
        .catch(function(err) {
          console.log('Error now is:', err);
        });
    }
  }
})();
