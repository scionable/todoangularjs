(function () {
	angular.module('todoApp')
		.service('userService', ['$http', userService]);

	function userService($http) {

		var service = {
			registerUser: registerUser
		};

		return service;

		function registerUser(data) {
			return $http.post('registerUser', data)
		}

	}

})();
