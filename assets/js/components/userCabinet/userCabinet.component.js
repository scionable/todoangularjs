(function () {
	angular.module('todoApp').component('userCabinet', {
		templateUrl: 'js/components/userCabinet/userCabinet.template.html',
		controller: ('userCabinetController', ['userService', '$scope', 'ModalService', userCabinetController])
	});

	function userCabinetController(userService, $scope, ModalService) {
		let $ctrl = this;
		$ctrl.addAdditionalInfo = addAdditionalInfo;
		$ctrl.showYesNo = showYesNo;

		function addAdditionalInfo(event, user) {
			var fd = new FormData();
			if (user.files) {
				$ctrl.nameImg = user.files.name;
			}
			// add to server:
			userService.additionalInfoUser(user);
		}

		// add popup module:
		function showYesNo() {
			ModalService.showModal({
				templateUrl: 'popup.template.html',
				controller: 'popupController',
			}).then(function (modal) {

				modal.close.then(function (result) {
					$scope.yesNoResult = result ? 'You said Yes' : "You didn't say Yes";
				});
			});
		}
	}
})();

