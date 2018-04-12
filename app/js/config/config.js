(function () {
	angular.module('todoApp', ['ui.router']).config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/templates/index.html',
					controller: 'HomeController',
					resolve: {
						getAllTasks: function(userService) {
							return userService.getAllTasks().then(function (resp) {
								return resp.data;
							});
						}
					}
				})
				.state('contacts', {
					url: '/contacts',
					template: '<h3>contacts!</h3>'
				})
				.state('task-list', {
					url: '/task-list',
					template: '<h3>task-list!</h3>'
				})
				.state('registration', {
					url: '/registration',
					component: 'registration'
				})
		}
	])
})()
