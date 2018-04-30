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
    $ctrl.user.id = 0;

    $ctrl.regexName = /^([а-яё]+|[a-z]+)$/i;
    $ctrl.regexPass = /^[a-z0-9_-]{3,16}$/;
    $ctrl.regexEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    $ctrl.existUser = false;
    // function validation(value, name) {
    //   if (name === 'name') $ctrl.inputName = $ctrl.regexName.test(value);
    //   if (name === 'email') $ctrl.inputEmail = $ctrl.regexEmail.test(value);
    //   if (name === 'password') $ctrl.inputPass = $ctrl.regexPass.test(value);
    // }
    function validation() {
      $ctrl.inputName = $ctrl.regexName.test($ctrl.user.name);
      $ctrl.inputEmail = $ctrl.regexEmail.test($ctrl.user.email);
      $ctrl.inputPass = $ctrl.regexPass.test($ctrl.user.password);
    }
    function registerUser(ev) {
      ev.preventDefault();
      validation();
      if ($ctrl.inputName && $ctrl.inputEmail && $ctrl.inputPass) {
        $ctrl.user.id++;
        userService
          .registerUser($ctrl.user)
          .then(function(response) {
            if (typeof response.data === 'string') {
              $ctrl.existUser = true;
            }
            $ctrl.user.name = '';
            $ctrl.user.email = '';
            $ctrl.user.password = '';
          })
          .catch(function(err) {
            console.log('Error now is:', err);
          });
      }
    }
  }
})();
