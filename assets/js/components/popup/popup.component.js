(function() {
  angular.module('todoApp').controller('popupController', ['$scope', 'close', popupController]);

  function popupController($scope, close) {
    let $ctrl = this;
    $scope.close = function(result) {
      close(result, 500); // close, but give 500ms for bootstrap to animate
    };
  }
})();
