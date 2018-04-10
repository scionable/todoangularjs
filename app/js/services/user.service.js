angular.module('todoApp').service('userService', [userService]);

function userService() {
	var service = {
		createNewUser: createNewUser,
		readAllUsers: readAllUsers,
		deleteUsers: deleteUsers
	};
	return service;


	var someValue = '';

	////////////

	function createNewUser(obj) {
		/* */
	}

	function readAllUsers() {
		/* */
	}

	function deleteUsers() {
		/* */
	}
}
