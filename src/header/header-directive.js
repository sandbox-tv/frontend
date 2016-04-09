app.directive('header', function() {
  return {
    restrict: 'E',
    transclude: false,
    templateUrl: 'header/header.html',
    controller: 'HeaderController'
  };
});
