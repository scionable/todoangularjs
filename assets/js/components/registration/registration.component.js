(function() {
  angular.module('todoApp').component('registration', {
    templateUrl: 'js/components/registration/registration.template.html',
    controller: ('RegistrationController', ['userService', RegistrationController])
  });

  function RegistrationController(userService) {
    let $ctrl = this;
	  $ctrl.activeTab
    // $ctrl.registerUser = registerUser;
    //
    //
    // function registerUser(ev, data) {
    //   ev.preventDefault();
    //   userService.registerUser(data)
	 //      .then(
    //   	function (reg) {
    //
    //     }
    //   ).error();
    // }

  }
})();
