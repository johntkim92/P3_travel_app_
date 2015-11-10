var myApp = angular.module("mapp", ['ngMap'])

var locations = [];
var markers = [];
myApp.controller('mapController', ['$scope', function ($scope) {
  $scope.markers = [];

  $scope.placeChanged = function () {
    $scope.place = this.getPlace();
    var dest = $scope.place.geometry.location
    // $scope.addOject(markers, marker)
    //
    // $scope.addOjects(markers)
    $scope.markers.push(new google.maps.Marker({
        map: $scope.map,
        position: dest,
        animation: "DROP"
      })
    );
    console.log(dest.lat(), dest.lng());
    // console.log($scope.markers);
    locations.push({lat: dest.lat(), lng: dest.lng()})
    $scope.map.panTo({lat: dest.lat(), lng: dest.lng()})
    $scope.map.setZoom(7)
    }
}])
