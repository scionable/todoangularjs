(function() {
  angular.module('todoApp').component('userCabinet', {
    templateUrl: 'js/components/userCabinet/userCabinet.template.html',
    controller: ('userCabinetController', ['userService', 'popupService', 'helperService', '$scope', userCabinetController])
  });

  function userCabinetController(userService, popupService, helperService, $scope) {
    let $ctrl = this;
    $ctrl.addAdditionalInfo = addAdditionalInfo;

    function addAdditionalInfo(user) {
      if (user && userService.user) {
        var fd = new FormData();
        if (user.files) {
          $ctrl.nameImg = user.files.name;
        }
        popupService.openPopup('js/components/popup/popup.template.html', user);
        //helperService.clearForm(user);
      }
    }
  }
})();
