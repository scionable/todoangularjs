(function() {
	angular
		.module("todoApp")
		.service("popupService", [
			"userService",
			"ModalService",
			"helperService",
			popupService
		]);

	function popupService(userService, ModalService, helperService) {
		let popup = {
			updateInfo: null,
			openPopup: openPopup,
			closePopup: closePopup,
			hidePopup: hidePopup
		};
		return popup;


		function openPopup(template, objTask) {
			this.updateInfo = objTask;
			ModalService.showModal({
				templateUrl: template,
				controller: "popupController",
				bodyClass: "custom-modal-open"
			});
		}

		function closePopup() {
			userService.additionalInfoUser(this.updateInfo);
			ModalService.closeModals(null, 500);
			helperService.clearForm(this.updateInfo);
			this.updateInfo = null;
		}

		function hidePopup() {
			this.updateInfo = null;
			ModalService.closeModals(null, 500);
		}
	}
})();
