(function() {
	angular.module("todoApp").controller("popupController", popupController);

	popupController.$inject = ["popupService", "$scope", "$state"];

	function popupController(popupService, $scope, $state, close) {
		let $ctrl = this;
		$ctrl.task = popupService.updateInfo;
		$scope.task = popupService.updateInfo;

		$scope.close = function() {
			popupService.closePopup();
			//$state.go('home');
		};

		$scope.cancel = function() {
			popupService.hidePopup();
		};
	}
})();
