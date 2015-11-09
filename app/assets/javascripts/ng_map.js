var myApp = angular.module("mapp", ['ngMap'])

var locations = [];
myApp.controller('mapController', function ($scope) {
  $scope.placeChanged = function () {
    $scope.place = this.getPlace();
    var dest = $scope.place.geometry.location
    $scope.map.panTo({lat: dest.lat(), lng: dest.lng()})
    setZoom(zoom: 12)
  }


})
