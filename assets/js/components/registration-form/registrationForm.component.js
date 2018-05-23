(function () {
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
				.then(function (resp) {
					//todo resp contains successfully logged in message, create toast for it
					helperService.clearForm($ctrl.user);
				})
				.catch(function (err) {
					$ctrl.errorMessage = err;
					helperService.hideErrorMessage($ctrl.errorMessage);
				})
		}

	}
})();
