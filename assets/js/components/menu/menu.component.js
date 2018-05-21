(function() {
  angular.module('todoApp').component('menu', {
    templateUrl: 'js/components/menu/menu.template.html',
    controller: ['userService', MenuComponent]
  });

  function MenuComponent(userService) {
    var $ctrl = this;
    $ctrl.getUser = getUser;
    $ctrl.menuLinks = [{ sref: 'home', text: 'Home' }, { sref: 'userCabinet', text: 'Cabinet' }, { sref: 'task-list', text: 'Task-list' }, { sref: 'auth', text: 'Login / Registration' }];

    function getUser() {
      var name;
      if (userService.getUserFromlocalStorage()) {
        name = userService.getUserFromlocalStorage().name;
      } else {
        name = 'Logo';
      }
      return name;
    }
  }
})();
