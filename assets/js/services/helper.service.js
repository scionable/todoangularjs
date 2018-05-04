(function () {
	angular.module('todoApp').service('helperService', ['$timeout', helperService]);

	function helperService($timeout) {

		let helperService = {
			clearForm: clearForm,
			hideErrorMessage: hideErrorMessage
		};
		return helperService;

		function clearForm(user) {
			user.name = '';
			user.email = '';
			user.password = '';
		}

		function hideErrorMessage(message) {
			$timeout(function () {
				message = '';
			}, 3000);
		}
	}
})();
