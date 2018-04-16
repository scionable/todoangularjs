(function () {
	angular
		.module('todoApp')
		.component('registration', {
			templateUrl: 'js/components/registration/registration.template.html',
			controller: [RegistrationController]
		});

	function RegistrationController() {
		var $ctrl = this;
	}
})();