(function() {
  angular.module('todoApp').directive('fileModel', ['$parse', fileModel]);

  function fileModel($parse) {
    var directive = {
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function() {
        scope.$apply(function() {
          modelSetter(scope, element[0].files[0]);
        });
        var oFReader = new FileReader();
        oFReader.readAsDataURL(element[0].files[0]);
        oFReader.onload = function(oFREvent) {
          scope.src = oFREvent.target.result;
          scope.$apply();
        };
      });
    }
  }
})();
