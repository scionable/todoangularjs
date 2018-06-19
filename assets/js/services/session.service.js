(function () {
	angular.module('todoApp').service('session', [sessionService]);

	function sessionService() {
		let sessionService = {
			create: create
		};
		return sessionService;

		function create(user) {
			this.userAuthorized = user;
		}
	}
})();
