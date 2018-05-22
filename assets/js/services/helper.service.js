(function() {
  angular.module('todoApp').service('helperService', ['$timeout', helperService]);

  function helperService($timeout) {
    let helperService = {
      clearForm: clearForm,
      hideErrorMessage: hideErrorMessage
    };
    return helperService;

    function clearForm(user) {
      for (let key in user) {
        user[key] = '';
      }
    }

    function hideErrorMessage(message) {
      let mess = message;
      $timeout(function() {
        mess = '';
      }, 2000);
    }
  }
})();
