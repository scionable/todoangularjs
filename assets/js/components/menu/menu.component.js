;(function() {
  angular.module('todoApp').component('menu', {
    templateUrl: 'js/components/menu/menu.template.html',
    controller: [MenuComponent]
  })

  function MenuComponent() {
    var $ctrl = this
    $ctrl.menuLinks = [{ sref: 'home', text: 'Home' }, { sref: 'contacts', text: 'Contacts' }, { sref: 'todo', text: 'Task-list' }, { sref: 'registration', text: 'Registration' }]
  }
})()
