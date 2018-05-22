(function() {
  angular.module('todoApp').component('userCabinet', {
    templateUrl: 'js/components/userCabinet/userCabinet.template.html',
    controller: ('userCabinetController', ['userService', '$scope', 'ModalService', userCabinetController])
  });

  function userCabinetController(userService, $scope, ModalService) {
    let $ctrl = this;
    $ctrl.addAdditionalInfo = addAdditionalInfo;
    $ctrl.showYesNo = showYesNo;

    function addAdditionalInfo(event, user) {
      var fd = new FormData();
      if (user.files) {
        $ctrl.nameImg = user.files.name;
      }
      // add to server:
      userService.additionalInfoUser(user);
    }

    // add popup module:
    function showYesNo() {
      ModalService.showModal({
        templateUrl: 'js/components/popup/popup.template.html',
        controller: 'popupController',
        preClose: modal => {
          modal.element.modal('hide');
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.yesNoResult = result ? 'You said Yes' : "You didn't say Yes";
        });
      });
    }

    // close popup module /
  }
})();

function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2);
  console.log('arr', arr);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    obj[key] = true;
  }
  console.log(' obj', obj);
  return Object.keys(obj)
    .map(iter => parseInt(iter))
    .sort(function sort(a, b) {
      return a < b ? false : true;
    });
}

console.log(mergeArrays([-13, -9, 2, 4, 15, 32, 42, 74, 90, 216], [-8, -3, -2, 0, 5, 6, 7, 8, 102, 134]), [-13, -9, -8, -3, -2, 0, 2, 4, 5, 6, 7, 8, 15, 32, 42, 74, 90, 102, 134, 216], 'Basic tests');
console.log(mergeArrays([-3, 0, 3, 4], [-2, -1, 1, 2]), [-3, -2, -1, 0, 1, 2, 3, 4], 'Basic tests');
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]), [1, 2, 3, 4, 5, 7, 9, 10, 11, 12], 'Basic tests');
