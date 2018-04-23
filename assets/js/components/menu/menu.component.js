(function () {
	angular.module('todoApp').component('menu', {
		templateUrl: 'js/components/menu/menu.template.html',
		controller: [MenuComponent]
	});

	function MenuComponent() {
		var $ctrl = this;

		$ctrl.menuLinks = [
			{sref: 'home', text: 'Home'},
			{sref: 'contacts', text: 'Contacts'},
			{sref: 'task-list', text: 'Task-list'},
			{sref: 'auth', text: 'Registration'}
		]
	}

})();
