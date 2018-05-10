(function() {
  angular.module('todoApp').component('registrationForm', {
    templateUrl: 'js/components/registration-form/registrationForm.template.html',
    controller: ('registrationFormController', ['userService', 'helperService', '$timeout', '$rootScope', '$state', registrationFormController])
  });

  function registrationFormController(userService, helperService, $timeout, $rootScope, $state) {
    let $ctrl = this;
    $ctrl.registerUser = registerUser;

    $ctrl.name = userService.regexName;
    $ctrl.pass = userService.regexPass;
    $ctrl.email = userService.regexEmail;

    function registerUser(ev, newUser) {
      ev.preventDefault();
      userService
        .registerUser(newUser)

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
        })
        .catch(function(err) {
          console.log('Error now is:', err);
        });
    }
  }
})();
