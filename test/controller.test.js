describe('testController', function () {

	let scope = {};
	let controller;

	beforeEach(angular.mock.module('todoApp'));

	beforeEach(angular.mock.inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller('testController', {
			$scope: scope
		})
	}));

	it('init controller', function () {
		expect(scope.value).toEqual(1);
	});

	it('increment', function () {
		scope.incrementValue();
		expect(scope.value).toEqual(2);
	});

	it('decrement', function () {
		scope.decrementValue();
		expect(scope.value).toEqual(0);
	})


});