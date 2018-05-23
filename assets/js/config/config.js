(function () {
	angular.module('todoApp').config([
		'$stateProvider',
		'$urlRouterProvider',

		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					component: 'homePage'
				})
				.state('userProfile', {
					url: '/userProfile',
					component: 'userProfile'
				})
				.state('task-list', {
					url: '/taskList',
					component: 'todo',
					resolve: {
						allTasks: [
							'taskService',
							function (taskService) {
								return taskService.getAllTasks().then(function (resp) {
									return resp.data;
								});
							}
						]
					}
				})
				.state('auth', {
					url: '/auth',
					component: 'registration'
				});
		}
	]);

	angular.module('todoApp').run(['userService', function (userService) {
		userService.user = userService.getUserFromlocalStorage() || null;
	}])

})();
