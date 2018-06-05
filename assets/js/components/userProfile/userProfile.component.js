(function() {
  angular.module("todoApp").component("userProfile", {
    templateUrl: "js/components/userProfile/userProfile.template.html",
    controller: ("userProfileController",
    ["$rootScope", "userService", userProfileController])
  });

  function userProfileController($rootScope, userService) {
    let $ctrl = this;
    $ctrl.user = userService.user;

    if ($ctrl.user === null) {
      $ctrl.displayAvatar = "";
      $ctrl.exist = true;
    } else {
      $ctrl.exist = false;
      $ctrl.displayAvatar = $ctrl.user.avatar;

      $ctrl.userAdditionalInfo = {
        displayAvatar: $ctrl.user.avatar,
        aboutme: $ctrl.user.aboutme,
        name: $ctrl.user.name,
        screenName: $ctrl.user.screenName,
        id: $ctrl.user._id
      };
    }

    $ctrl.onAvatarChange = onAvatarChange;
    $ctrl.submit = submit;

    function onAvatarChange(event) {
      $ctrl.displayAvatar = $ctrl.userAdditionalInfo.displayAvatar =
        arguments[5].base64;
    }

    function submit(userAdditionalInfo) {
      delete userAdditionalInfo.avatar;
      $rootScope.$broadcast(
        "userAvatarUpdated",
        $ctrl.userAdditionalInfo.displayAvatar
      );
      userService.updateUserInfo(userAdditionalInfo).then(function(resp) {});
    }
  }
})();
