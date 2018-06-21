(function () {
	angular.module('todoApp').controller('testController', ['$scope', testController]);

	function testController($scope) {

		$scope.value = 1;

		$scope.incrementValue = incrementValue;
		$scope.decrementValue = decrementValue ;

		function incrementValue () {
			return $scope.value++;
		}

		function decrementValue () {
			return $scope.value--;
		}
	}

})();