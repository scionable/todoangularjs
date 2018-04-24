(function() {
  angular.module('todoApp').component('registration', {
    templateUrl: 'js/components/registration/registration.template.html',
    controller: ('RegistrationController', ['userService', RegistrationController])
  });

  function RegistrationController(userService) {
    let $ctrl = this;

    $ctrl.registerUser = registerUser;
    $ctrl.activeTab = activeTab;
    $ctrl.tab = 'Login';
    $ctrl.tabsTitle = ['Login', 'Registration'];

    function registerUser(ev, data) {
      ev.preventDefault();
      userService.registerUser(data);
    }
    function activeTab(activeTab) {

	    $ctrl.tab = activeTab;
    }
  }
})();
