var app = angular.module('TravelApp', ['ngMap']);


var locations = [];
var markers = [];
var destName;
var destLat;
var destLng;
app.controller('mapController', function ($scope) {
  var controller = this;
  $scope.$on('mapInitialized', function(evt, evtMap) {
            map = evtMap;
            map.setOptions({minZoom: 2})
          });
    // $scope.$broadcast('placeChangedFunctionSent', data)


  $scope.show = function() {
    if (this.getAnimation() != null) {
      this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
      console.log(this);
      var dest = this.position
      $scope.map.panTo({lat: dest.lat() + 3,
                        lng: dest.lat()})
    }
  }

})

//Header Controller
app.controller('HeaderController', ['$http', function($http) {
  var controller = this;
  //Get current user from route
  $http.get('/session').success(function(data) {
    //setting curent user to data.current user because data comes nested in current user
    controller.current_user = data.current_user;
    console.log(controller.current_user);
  });
}]);
//Trips Controller
app.controller('TripsController', ['$http', '$scope', function($http, $scope) {
  //get authenticity_token from DOM (rails injects it on load)
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  var controller = this;

  //trip types for select in html
  this.TRIPTYPE = ['Summer', 'Winter', 'Family', 'Honeymoon', 'Other'];
  this.newTripTripType = "Other";

  $scope.placeChanged = function () {
    $scope.place = this.getPlace();
    var dest = $scope.place.geometry.location
    new google.maps.Marker({
        map: $scope.map,
        position: dest,
        animation: "DROP"
      }
    );
    destLat = $scope.place.geometry.location.lat();
    destLng = $scope.place.geometry.location.lng();
    destName = $scope.place.name;
    console.log(destLat);
    console.log(destLng);
    console.log($scope.place.name);
    // console.log($scope.markers);
    locations.push({lat: dest.lat(), lng: dest.lng()})

    $scope.map.panTo({lat: dest.lat(), lng: (dest.lng() + 3)})
    $scope.map.setZoom(6)
  }

  $http.get('/session').success(function(data) {
    //setting curent user to data.current user because data comes nested in current user
    controller.current_user = data.current_user;
    console.log(controller.current_user);
  });
  this.getTrips = function() {
    // get trips for current User
    $http.get('/trips').success(function(data) {
      //add trips to controller, data comes back with user
      controller.username = data.username;
      console.log(data);
      controller.current_user_trips = data.trips;
      controller.trips = [];
      console.log($scope.$parent);


      angular.forEach(data.trips, function(value) {
        controller.trips.push({lat: value.latitude, lng: value.longitude})
      });

      console.log($scope);
      console.log(controller.current_user_trips);
    });
  }
  this.getTrips();

  // create a Trip
  this.createTrip = function() {

    controller.current_user_trips.push({
      title: this.newTripTitle + "...loading",
      destination: this.newTripDestination + "...loading",
      description: this.newTripDescription + "...loading",
      start_date: this.newTripStartDate + "...loading",
      end_date: this.newTripEndDate + "...loading",
      trip_type: this.newTripTripType + "...loading",
      notes: this.newTripNotes + "...loading"
    });

    $http.post('/trips', {
      // authenticity_token: authenticity_token,
      trip: {
          title: this.newTripTitle,
          destination: destName,
          description: this.newTripDescription,
          longitude: destLng,
          latitude: destLat,
          start_date: this.newTripStartDate,
          end_date: this.newTripEndDate,
          trip_type: this.newTripTripType,
          notes: this.newTripNotes
      }
    }).success(function(data){
      controller.current_user_trips.pop();
      controller.current_user_trips.push(data.trip);
      controller.getTrips();
      console.log(destLat);
      console.log(destLng);
    }).error(function(error){
      console.log(error);
      console.log(destLat);
      console.log(destLng);
    });
  }

  this.editTrip = function(trip) {
    $http.patch('/trips/'+trip.id, {
      authenticity_token: authenticity_token,
      trip: {
        title: this.editTripTitle,
        destination: trip.destination,
        description: this.editTripDescription,
        longitude: trip.longitude,
        latitude: trip.latitude,
        start_date: this.editTripStartDate,
        end_date: this.editTripEndDate,
        trip_type: trip.trip_type,
        notes: this.editTripNotes
      }
    }).success(function(data) {
      controller.getTrips();
      console.log(destLng);
      console.log(destLat);
      console.log(destName);
    }).error(function(data, status) {
      console.log(data);
      console.log(destLng);
      console.log(destLat);
      console.log(destName);
    });
  }

  this.deleteTrip = function(trip) {
    $http.delete('/trips/'+trip.id, {
      authenticity_token: authenticity_token
    }).success(function(data) {
      controller.getTrips();
    }).error(function(data, status) {
      controller.getTrips();
      console.log(authenticity_token);
    });
  }
  this.getTrips();
}]);


app.controller('CommentsController', ['$http', '$scope', function($http, $scope) {
  //get authenticity_token from DOM (rails injects it on load)
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  //create a comment
  this.createComment = function() {
    $http.post('/trips/'+$scope.$parent.trip.id+'/comments', {
      //include authenticity_token
      authenticity_token: authenticity_token,
      comment: {
        // trip_id: trip_id,
        entry: this.newCommentEntry
      }
    }).success(function(data) {
      $scope.$parent.trips.getTrips();
    });
  }
}]);
