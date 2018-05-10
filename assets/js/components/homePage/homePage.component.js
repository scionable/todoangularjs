(function() {
  angular.module('todoApp').component('homePage', {
    templateUrl: 'js/components/homePage/homePage.template.html',
    controller: ('homePageController', ['userService', 'session', homePageController])
  });

  function homePageController(userService, session) {
    let $ctrl = this;
    $ctrl.logoutUser = logoutUser;
    $ctrl.user = userService.getUserFromlocalStorage();
    console.log('session', session);
    function logoutUser() {
      userService.userLogout();
      $ctrl.user = null;
    }
  }
})();
