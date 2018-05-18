(function() {
  angular.module('todoApp').component('userCabinet', {
    templateUrl: 'js/components/userCabinet/userCabinet.template.html',
    controller: ('userCabinetController', ['userService', userCabinetController])
  });

  function userCabinetController(userService) {
    //fileModel,
    let $ctrl = this;
    $ctrl.addAdditionalInfo = addAdditionalInfo;

    console.log('userService.user = cabinet', userService);
    function addAdditionalInfo(event, user) {
      var fd = new FormData();
      if (user.files) {
        $ctrl.nameImg = user.files.name;
      }

      // add to server:
      userService.additionalInfoUser(user);
    }
  }
})();
