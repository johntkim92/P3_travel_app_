var myApp = angular.module("mapp", ['ngMap'])

myApp.controller('mapController', function ($scope){
  $scope.placeChanged = function () {
    $scope.place = this.getPlace();
    var location = $scope.place.geometry.location
      console.log(location.lat(), location.lng());
  }
})
