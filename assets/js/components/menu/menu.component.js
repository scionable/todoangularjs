(function () {
	angular.module('todoApp').component('menu', {
		templateUrl: 'js/components/menu/menu.template.html',
		controller: ['$scope', 'userService', MenuComponent]
	});

	function MenuComponent($scope, userService) {
		var $ctrl = this;
		$ctrl.menuLinks = [
			{sref: 'home', text: 'Home'},
			{sref: 'userCabinet', text: 'Cabinet'},
			{sref: 'task-list', text: 'Task-list'},
			{sref: 'auth', text: 'Login / Registration'}
		];

		$scope.$on('user-logout', function (event, args) {
			$ctrl.user = args.user || 'Logo';
		});

		$scope.$on('user-login', function(event, args) {
			$ctrl.user = args.user.name;
		});

		$ctrl.user = userService.user ? userService.user.name : 'Logo';
	}
})();
