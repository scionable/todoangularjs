(function () {
	angular.module('todoApp').component('loginForm', {
		templateUrl: 'js/components/login-form/loginForm.template.html',
		controller: ('loginFormController', ['userService', 'helperService', '$timeout', '$rootScope', '$state', loginFormController])
	});

	function loginFormController(userService, helperService, $timeout, $rootScope, $state) {
		let $ctrl = this;
		$ctrl.loginUser = loginUser;
		$ctrl.email = userService.regexEmail;
		$ctrl.pass = userService.regexPass;

		function loginUser(ev, data) {
			ev.preventDefault();
			userService
				.loginUser(data)
				.then(function (resp) {
					//todo resp contains successfully logged in message, create toast for it
					helperService.clearForm($ctrl.user);
					$state.go('home');
				})
				.catch(function (err) {
					$ctrl.errorMessage = err;
					helperService.hideErrorMessage($ctrl.errorMessage);
				})
		}
	}
})();
