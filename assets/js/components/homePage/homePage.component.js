(function() {
  angular.module('todoApp').component('homePage', {
    templateUrl: 'js/components/homePage/homePage.template.html',
    controller: ('homePageController', ['userService', homePageController])
  });

  function homePageController(userService) {
    let $ctrl = this;
    $ctrl.logoutUser = logoutUser;
    $ctrl.user = Object.assign({}, userService.user);

    function logoutUser() {
      userService.userLogout();
      $ctrl.user = null;
    }
  }
})();
