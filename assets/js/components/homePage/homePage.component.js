(function() {
  angular.module('todoApp').component('homePage', {
    templateUrl: 'js/components/homePage/homePage.template.html',
    controller: ('homePageController', ['userService', '$timeout', '$rootScope', homePageController])
  });

  function homePageController(userService, $timeout, $rootScope) {
    let $ctrl = this;
    if ($rootScope.user) {
      $ctrl.user = $rootScope.user;
    }
  }
})();
