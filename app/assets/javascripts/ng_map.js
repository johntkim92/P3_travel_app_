var myApp = angular.module("mapp", ['ngMap'])

var locations = [];
myApp.controller('mapController', function ($scope) {
  $scope.placeChanged = function () {
    $scope.place = this.getPlace();
    var dest = $scope.place.geometry.location
    locations.push([dest.lat(), dest.lng()])
    $scope.addMarker($scope.place)
    }


})
