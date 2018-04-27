(function() {
  angular.module('todoApp').component('registrationForm', {
    templateUrl: 'js/components/registration-form/registrationForm.template.html',
    controller: ('registrationFormController', ['userService', registrationFormController])
  });

  function registrationFormController(userService) {
    let $ctrl = this;
    $ctrl.registerUser = registerUser;
    $ctrl.validation = validation;

    $ctrl.user = {};

    $ctrl.regexName = /^([а-яё]+|[a-z]+)$/i;
    $ctrl.regexPass = /^[a-z0-9_-]{3,16}$/;
    $ctrl.regexEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    $ctrl.existUser = false;
    function validation(value, name) {
      if (name === 'name') $ctrl.inputName = $ctrl.regexName.test(value);
      if (name === 'email') $ctrl.inputEmail = $ctrl.regexEmail.test(value);
      if (name === 'password') $ctrl.inputPass = $ctrl.regexPass.test(value);
    }

    function registerUser(ev) {
      ev.preventDefault();
      if ($ctrl.inputName && $ctrl.inputEmail && $ctrl.inputPass) {
        userService
          .registerUser($ctrl.user)
          .then(function(response) {
            console.log(response);
            if (typeof response.data === 'string') {
              console.log('typeof string', response);
              $ctrl.existUser = true;
            }
          })
          .catch(function(err) {
            console.log('Error now is:', err);
          });

        $ctrl.user.name = '';
        $ctrl.user.email = '';
        $ctrl.user.password = '';
      }
    }
  }
})();
