var myApp = angular.module("mapp", ['ngMap'])

var locations = [];
myApp.controller('mapController', function ($scope) {
  $scope.placeChanged = function () {
    $scope.place = this.getPlace();
    var dest = $scope.place.geometry.location
    new google.maps.Marker({
        map: $scope.map,
        position: dest
      })
      locations.push({lat: dest.lat(), lng: dest.lng()})
      $scope.map.panTo({lat: dest.lat(), lng: dest.lng()})
      $scope.map.setZoom(7)
    }
})
