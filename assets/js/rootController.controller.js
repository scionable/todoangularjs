(function() {
  angular.module('todoApp').controller('rootController', function rootController(userService) {
    let $ctrl = this;
    console.log(' userService root', userService.user);
  });
})();
