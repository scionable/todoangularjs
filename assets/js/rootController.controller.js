(function() {
  angular.module('todoApp').controller('rootController', [
    '$scope',
    function($scope) {
      console.log('$scope', $scope);
    }
  ]);
})();
