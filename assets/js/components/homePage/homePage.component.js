(function () {
	angular.module('todoApp').component('homePage', {
		templateUrl: 'js/components/homePage/homePage.template.html',
		controller: ('homePageController', ['$rootScope', homePageController])
	});

	function homePageController($rootScope) {
		let $ctrl = this;

		if ($rootScope.user) $ctrl.user = $rootScope.user;

	}
})();
