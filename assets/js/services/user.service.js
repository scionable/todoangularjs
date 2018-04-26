(function () {
	angular.module('todoApp')
		.service('userService', ['$http', userService]);

	function userService($http) {

		var service = {
			registerUser: registerUser,
			loginUser: loginUser
		};

		return service;

		function registerUser(data) {
			return $http.post('/registerUser', data)
		}

		function loginUser(data) {
			return $http.post('/login', data);
		}

	}

})();
