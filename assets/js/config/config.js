(function () {
	angular.module('todoApp', ['ui.router']).config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					controller: 'HomeController',
					templateUrl: 'partials/index.html',
					resolve: {
						allTasks: ['taskService', function(taskService) {
							return taskService.getAllTasks().then(function (resp) {
								return resp.data;
							});
						}]
					}
				})
				.state('contacts', {
					url: '/contacts',
					template: '<h3>contacts!</h3>'
				})
				.state('task-list', {
					url: '/taskList',
					component: 'todo',
					resolve: {
						allTasks: ['taskService', function(taskService) {
							return taskService.getAllTasks().then(function (resp) {
								return resp.data;
							});
						}]
					}
				})
				.state('registration', {
					url: '/registration',
					component: 'registration'
				})
		}
	])

})();
