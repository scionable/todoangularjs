(function() {
  angular.module("todoApp").component("menu", {
    templateUrl: "js/components/menu/menu.template.html",
    controller: ["$scope", "userService", MenuComponent]
  });

  function MenuComponent($scope, userService) {
    var $ctrl = this;
    $ctrl.user = userService.user;
    $ctrl.menuLinks = [
      { sref: "home", text: "Home" },
      { sref: "userProfile", text: "Profile" },
      { sref: "task-list", text: "Task-list" },
      { sref: "auth", text: "Login / Registration" }
    ];

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
