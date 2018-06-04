(function() {
  angular.module("todoApp").component("loginForm", {
    templateUrl: "js/components/login-form/loginForm.template.html",
    controller: ("loginFormController",
    [
      "userService",
      "helperService",
      "$timeout",
      "$rootScope",
      "$state",
      "toastr",
      loginFormController
    ])
  });

  function loginFormController(
    userService,
    helperService,
    $timeout,
    $rootScope,
    $state,
    toastr
  ) {
    let $ctrl = this;
    $ctrl.loginUser = loginUser;
    $ctrl.email = userService.regexEmail;
    $ctrl.pass = userService.regexPass;

    function loginUser(ev, data) {
      ev.preventDefault();
      userService
        .loginUser(data)
        .then(function(resp) {
          helperService.clearForm($ctrl.user);
          toastr.success(resp, "Success!");
          $state.go("home");
        })
        .catch(function(err) {
          helperService.hideErrorMessage($ctrl.errorMessage);
          toastr.error(err, "Error");
          helperService.clearForm($ctrl);
        });
    }
  }
})();
