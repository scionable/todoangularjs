(function () {
	angular.module('todoApp').component('userProfile', {
		templateUrl: 'js/components/userProfile/userProfile.template.html',
		controller: ('userProfileController', ['$rootScope', 'userService', userProfileController])
	});

	function userProfileController($rootScope, userService) {
		let $ctrl = this;
		$ctrl.user = userService.user;
		$ctrl.displayAvatar = $ctrl.user.avatar || '';

		$ctrl.onAvatarChange = onAvatarChange;
		$ctrl.submit = submit;

		$ctrl.userAdditionalInfo = {
			displayAvatar: $ctrl.user.avatar || '',
			aboutme: $ctrl.user.aboutme || '',
			name: $ctrl.user.name,
			screenName: $ctrl.user.screenName || '',
			id: $ctrl.user._id
		};

		function onAvatarChange(event) {
			$ctrl.displayAvatar = $ctrl.userAdditionalInfo.displayAvatar = arguments[5].base64;
			$rootScope.$broadcast('userAvatarUpdated', $ctrl.userAdditionalInfo.displayAvatar);
		}

		function submit(userAdditionalInfo) {
			delete userAdditionalInfo.avatar;
			userService.updateUserInfo(userAdditionalInfo)
				.then(function (resp) {
					console.log(resp);
				})
		}

	}
})();
