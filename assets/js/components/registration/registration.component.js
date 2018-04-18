(function() {
	angular.module('todoApp').component('registration', {
		templateUrl: 'js/components/registration/registration.template.html',
		controller: ('RegistrationController', ['allUsersService', RegistrationController])
	})
	
	function RegistrationController(allUsersService) {
		var i = 0
		var $ctrl = this
		$ctrl.user = {}
		$ctrl.user.id = i++
		$ctrl.addNewUser = function() {
			if (Object.keys($ctrl.user).length !== 0) {
				
				allUsersService.addNewUser($ctrl.user)
				
			}
		}
	}
})()