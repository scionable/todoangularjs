(function () {
	angular.module("todoApp").service("userService", userService);

	userService.$inject = ["$http", "$q", "$window", "$rootScope"];

	function userService($http, $q, $window, $rootScope) {
		let regexName = /^([а-яё]+|[a-z]+)$/i;
		let regexPass = /^[a-z0-9_-]{3,16}$/;
		let regexEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

		let service = {
			registerUser: registerUser,
			loginUser: loginUser,
			userLogout: userLogout,
			updateUserInfo: updateUserInfo,
			getUserFromlocalStorage: getUserFromlocalStorage,
			additionalInfoUser: additionalInfoUser,
			regexName: regexName,
			regexPass: regexPass,
			regexEmail: regexEmail
		};

		return service;

		function registerUser(data) {
			return $http
				.post("/registerUser", data)
				.then(function (resp) {
					if (!(typeof resp.data !== "string")) return $q.reject(resp.data);
					setUserToLocalStorage(resp.data);
					service.user = resp.data;
				})
				.then(function () {
					$rootScope.$broadcast("user-login", {user: service.user});
				})
				.then(function () {
					return $q.resolve("You successfully registered");
				});
		}

		function loginUser(data) {
			return $http
				.post("/login", data)
				.then(function (resp) {
					if (!(typeof resp.data !== "string")) return $q.reject(resp.data);
					setUserToLocalStorage(resp.data);
					service.user = resp.data;
				})
				.then(function () {
					$rootScope.$broadcast("user-login", {user: service.user});
				})
				.then(function () {
					return $q.resolve("You successfully logged in");
				});
		}

		function updateUserInfo(data) {
			return $http
				.patch("/updateUserInfo", data)
				.then(function (resp) {
					if (!(typeof resp.data !== "string")) return $q.reject(resp.data);
					setUserToLocalStorage(resp.data);
					service.user = resp.data;
				})
				.then(function () {
					return $q.resolve("User information successfully updated");
				});
		}

		function setUserToLocalStorage(user) {
			let serialUser = JSON.stringify(user);
			$window.localStorage.setItem("user-token", serialUser);
		}

		function getUserFromlocalStorage() {
			return JSON.parse($window.localStorage.getItem("user-token"));
		}

		function userLogout() {
			service.user = null;
			$window.localStorage.removeItem("user-token");
			$rootScope.$broadcast("user-logout", {user: service.user});
		}

		function additionalInfoUser(user) {
			service.user = Object.assign(service.user, user);
			setUserToLocalStorage(service.user);
		}
	}
})();