(function () {
	angular.module("todoApp").component("menu", {
		templateUrl: "js/components/menu/menu.template.html",
		controller: ["$scope", "userService", MenuComponent]
	});

	function MenuComponent($scope, userService) {
		var $ctrl = this;
		$ctrl.user = userService.user;
		$ctrl.menuLinks = [
			{sref: "home", text: "Home", isShow: true},
			{sref: "userProfile", text: "Profile", isShow: !!$ctrl.user, shouldUpdate: true},
			{sref: "task-list", text: "Task-list", isShow: !!$ctrl.user, shouldUpdate: true},
			{sref: "auth", text: "Login / Registration", isShow: true}
		];

		function updateMenu(){
			$ctrl.menuLinks.forEach(function (menuLink) {
				if(!menuLink.shouldUpdate) return;
				return menuLink.isShow = !!$ctrl.user;
			})
		}

		$scope.$on("user-logout", function (event, args) {
			$ctrl.user = args.user;
			updateMenu();
		});

		$scope.$on("user-login", function (event, args) {
			$ctrl.user = args.user;
			updateMenu();
		});

		$scope.$on("userAvatarUpdated", function (event, args) {
			$ctrl.user.avatar = args;
		});
	}
})();
