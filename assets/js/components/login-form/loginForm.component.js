(function () {
	angular.module('todoApp').component('loginForm', {
		templateUrl: 'js/components/login-form/loginForm.template.html',
		controller: ('loginFormController', [loginFormController])
	});

	function loginFormController() {

		let $ctrl = this;
		$ctrl.user = {};

		let regexText = /^[А-Я]{0,1}[а-я]{1,15}( [А-Я]{0,1}[а-я]{1,15}){0,1}$|^[A-Z]{0,1}[a-z]{1,15}( [A-Z]{0,1}[a-z]{1,15}){0,1}$/g;
		let regexNum = /^\d[\d\(\)\ -]{4,14}\d$/;
		let regexEmail = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	}

})();
