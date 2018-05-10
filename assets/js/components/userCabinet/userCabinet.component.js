(function() {
  angular.module('todoApp').component('userCabinet', {
    templateUrl: 'js/components/userCabinet/userCabinet.template.html',
    controller: ('userCabinetController', [userCabinetController])
  });
  function userCabinetController() {
    let $ctrl = this;
  }
})();
