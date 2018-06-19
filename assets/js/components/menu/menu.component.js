(function() {
	angular.module("todoApp").component("menu", {
		templateUrl: "js/components/menu/menu.template.html",
		controller: MenuComponent,
		controllerAs: "menuCtrl"
	});

	var menuLinks = [
		{ sref: "home", text: "Home", name: "home" },
		{
			sref: "userProfile",
			text: "Profile",
			name: "userProfile"
		},
		{
			sref: "task-list",
			text: "Tasks",
			name: "tasks"
		},
		{ sref: "auth", text: "Login / Registration", name: "auth" }
	];

	MenuComponent.$inject = ["$scope", "userService"];

	function MenuComponent($scope, userService) {
		var $ctrl = this;
		$ctrl.user = userService.user;
		$ctrl.isLogin = !!$ctrl.user;
		$ctrl.showLink = showLink;
		$ctrl.menuLinks = menuLinks;
		// $ctrl.isActive = isActive;

		$scope.$watch(
			"menuCtrl.user",
			function(newValue, oldValue) {
				$ctrl.isLogin = !!newValue;
			},
			true
		);

		function showLink(linkSref) {
			switch (linkSref) {
				case "userProfile":
				case "task-list":
					return $ctrl.isLogin;

				default:
					return true;
			}
		}
		// will do this methods for leave active task
		function isActive(linkSref) {
			switch (linkSref) {
				case "userProfile":
				case "task-list":
					return $ctrl.isLogin;

				default:
					return true;
			}
		}

		$scope.$on("user-logout", function(event, args) {
			$ctrl.user = args.user;
		});

		$scope.$on("user-login", function(event, args) {
			$ctrl.user = args.user;
		});

		$scope.$on("userAvatarUpdated", function(event, args) {
			$ctrl.user.avatar = args;
		});
	}
})();
