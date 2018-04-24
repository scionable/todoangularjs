(function() {
	angular.module('todoApp').component('form-registration', {
		templateUrl: 'js/components/form-registration/form-registration.template.html',
		controller: ('FormRegistrationController', ['userService', FormRegistrationController])
	});

	function FormRegistrationController(userService) {
		let $ctrl = this;

		$ctrl.registerUser = registerUser;


		function registerUser(ev, data) {
			ev.preventDefault();
			userService.registerUser(data)
				.then(
					function (reg) {

					}
				).error();
		}

	}
})();