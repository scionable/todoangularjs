(function () {
	angular.module('todoApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'templates/index.html'
			})
			.state('schedule', {
				url: '/schedule',
				template: '<h3>schedule!</h3>'
			})
	}]);
})();
