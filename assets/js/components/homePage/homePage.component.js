(function () {
	angular.module('todoApp').component('homePage', {
		templateUrl: 'js/components/homePage/homePage.template.html',
		controller: ('homePageController', ['$scope', 'userService', homePageController])
	});

	function homePageController($scope, userService) {
		let $ctrl = this;
		$ctrl.user = userService.user;
		$ctrl.logoutUser = logoutUser;

		$scope.$on('user-logout', function(event, args) {
			$ctrl.user = args.user;
		});

		function logoutUser() {
			userService.userLogout();
		}
	}
})();
