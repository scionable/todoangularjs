(function() {
  angular.module('todoApp').component('registration', {
    templateUrl: 'js/components/registration/registration.template.html',
    controller: ('RegistrationController', ['userService', RegistrationController])
  });

  function RegistrationController(userService) {
    let $ctrl = this;
    $ctrl.activeTab = true;
  }
})();
