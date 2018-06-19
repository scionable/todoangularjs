(function() {
	angular.module("todoApp").config([
		"$stateProvider",
		"$urlRouterProvider",
		"$locationProvider",

		function($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise("/");
			$locationProvider.html5Mode(true);
			$stateProvider
				.state("home", {
					url: "/",
					component: "homePage"
				})
				.state("userProfile", {
					url: "/userProfile",
					component: "userProfile"
				})
				.state("task-list", {
					url: "/taskList",
					component: "todo"
				})
				.state("taskInfo", {
					url: "/task/:taskId",
					templateUrl: "js/components/task/task.template.html",
					controller: taskController,
					controllerAs: "taskCtrl"
				})
				.state("auth", {
					url: "/auth",
					component: "registration"
				});
		}
	]);

	angular.module("todoApp").run([
		"userService",
		function(userService) {
			userService.user = userService.getUserFromlocalStorage() || null;
		}
	]);
})();
