(function() {
  angular.module("todoApp").component("menu", {
    templateUrl: "js/components/menu/menu.template.html",
    controller: MenuComponent
  });

  var menuLinks = [
    { sref: "home", text: "Home" },
    {
      sref: "userProfile",
      text: "Profile"
    },
    {
      sref: "task-list",
      text: "Task-list"
    },
    { sref: "auth", text: "Login / Registration" }
  ];

  MenuComponent.$inject = ["$scope", "userService"];

  function MenuComponent($scope, userService) {
    var $ctrl = this;
    $ctrl.user = userService.user;
    $ctrl.isLogin = !!$ctrl.user;
    $ctrl.showLink = showLink;
    $ctrl.menuLinks = menuLinks;

    $scope.$watch(
      "$ctrl.user",
      function(newValue, oldValue) {
        $scope.$ctrl.isLogin = !!newValue;
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
