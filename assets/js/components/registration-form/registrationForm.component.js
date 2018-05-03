(function() {
  angular.module('todoApp').component('registrationForm', {
    templateUrl: 'js/components/registration-form/registrationForm.template.html',
    controller: ('registrationFormController', ['userService', registrationFormController])
  });

  function registrationFormController(userService) {
    let $ctrl = this;
    $ctrl.registerUser = registerUser;

    $ctrl.user = {};
    $ctrl.existUser = false;
    $ctrl.regexName = /^([а-яё]+|[a-z]+)$/i;
    $ctrl.regexPass = /^[a-z0-9_-]{3,16}$/;
    $ctrl.regexEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    function cleanInput() {
      $ctrl.user.name = '';
      $ctrl.user.email = '';
      $ctrl.user.password = '';
    }

    function registerUser(newUser) {
      userService
        .registerUser(newUser)
        .then(function(response) {
          if (typeof response.data === 'string') {
            $ctrl.existUser = true;
          }
          cleanInput();
        })
        .catch(function(err) {
          console.log('Error now is:', err);
        });
    }
  }
})();
