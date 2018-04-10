(function () {
	angular.module('todoApp').component('todo', {
		templateUrl: '/templates/todo.html',
		controller: ('AddUserController', ['userService', AddUserController])
	});

	function AddUserController(userService) {
		var $ctrl = this;

		$ctrl.users = [];
		$ctrl.name = 'userName';
		$ctrl.name = 'userName';
		$ctrl.log = 'userLog';

		$ctrl.addObjUser = function (name, password) {
			var objUser = {
				name: name,
				pass: password
			}
			$ctrl.users.push(objUser)
		}
	}
	

})();
