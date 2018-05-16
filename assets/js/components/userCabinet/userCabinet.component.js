(function() {
  angular.module('todoApp').component('userCabinet', {
    templateUrl: 'js/components/userCabinet/userCabinet.template.html',
    controller: ('userCabinetController', ['$scope', 'userService', userCabinetController])
  });
  //     .directive('fileModel', ['$parse', fileModel]);

  //   function fileModel($parse) {
  //     var directive = {
  //       restrict: 'A',
  //       link: link
  //     };
  //     return directive;

  //     function link(scope, element, attrs) {
  //       var model = $parse(attrs.fileModel);
  //       var modelSetter = model.assign;

  //       element.bind('change', function() {
  //         scope.$apply(function() {
  //           modelSetter(scope, element[0].files[0]);
  //         });
  //         var oFReader = new FileReader();

  //         oFReader.readAsDataURL(element[0].files[0]);
  //         oFReader.onload = function(oFREvent) {
  //           scope.src = oFREvent.target.result;
  //           scope.$apply();
  //         };
  //       });
  //     }
  //   }

  function userCabinetController($scope, fileModel) {
    let $ctrl = this;

    $ctrl.addAdditionalInfo = addAdditionalInfo;

    function addAdditionalInfo(event, user) {
      var fd = new FormData();
      $ctrl.nameImg = $scope.files.name;
    }
  }
})();
