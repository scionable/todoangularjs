"use strict";
(function() {
  angular.module("todoApp").component("homePage", {
    templateUrl: "js/components/homePage/homePage.template.html",
    controller: ("homePageController", homePageController),
    controllerAs: "homeCtrl"
  });

  homePageController.$inject = ["$scope", "userService"];

  function homePageController($scope, userService) {
    console.log("$scope", $scope);
    let $ctrl = this;
    $ctrl.user = userService.user;
    $ctrl.logoutUser = logoutUser;

    $scope.$on("user-logout", function(event, args) {
      $ctrl.user = args.user;
    });

    function logoutUser() {
      userService.userLogout();
    }
  }
})();
