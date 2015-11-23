var app = angular.module('app',[]);

app.controller('HeaderController', function ($scope) {
  $scope.initFeed = function () {
    // alert("Hello");
  }
  $scope.initFeed();
})
.directive('pageHeader', function() {
  return {
    templateUrl: 'views/header.html'
  };
});