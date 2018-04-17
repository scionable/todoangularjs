angular.module('Todo', []);

function mainController($scope, $http) {

	$scope.formData = {};

	$http.get('getAllTasks')
		.success(function (data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});

	$scope.createTodo = function () {
		$http.post('createTask', $scope.formData)
			.success(function (data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log('Error: ' + data);
			});
	};

	$scope.deleteTodo = function (id) {
		$http.delete('/tasks/' + id)
			.success(function (data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log('Error: ' + data);
			});
	};

}