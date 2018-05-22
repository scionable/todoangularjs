(function() {
  angular.module('todoApp').controller('popupController', ['popupService', '$scope', '$state', popupController]);

  function popupController(popupService, $scope, $state, close) {
    let $ctrl = this;

    $scope.close = function() {
      popupService.closePopup();
      //$state.go('home');
    };

    $scope.cancel = function() {
      popupService.hidePopup();
    };
  }
})();
