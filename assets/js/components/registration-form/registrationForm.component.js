(function() {
  angular.module("todoApp").component("registrationForm", {
    templateUrl:
      "js/components/registration-form/registrationForm.template.html",
    controller: ("registrationFormController",
    [
      "userService",
      "helperService",
      "$timeout",
      "$rootScope",
      "$state",
      "toastr",
      registrationFormController
    ])
  });

  function registrationFormController(
    userService,
    helperService,
    $timeout,
    $rootScope,
    $state,
    toastr
  ) {
    let $ctrl = this;
    $ctrl.registerUser = registerUser;

    $ctrl.name = userService.regexName;
    $ctrl.pass = userService.regexPass;
    $ctrl.email = userService.regexEmail;

    function registerUser(ev, newUser) {
      ev.preventDefault();
      userService
        .registerUser(newUser)
        .then(function(resp) {
          toastr.success(resp, "Success!");
          $state.go("home");
          helperService.clearForm($ctrl.user);
        })
        .catch(function(err) {
          toastr.error(err, "Error");
          helperService.clearForm($ctrl.user);
        });
    }
  }
})();
