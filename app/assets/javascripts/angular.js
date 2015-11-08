var app = angular.module('TravelApp', []);

//Header Controller
app.controller('HeaderController', ['$http', function($http) {
  var controller = this;
  //Get current user from route
  $http.get('/session').success(function(data) {
    //setting curent user to data.current user because data comes nested in current user
    controller.current_user = data.current_user;
    // console.log(controller.current_user);
  });
}]);

//Trips Controller
app.controller('TripsController', ['$http', function($http) {
  //get authenticity_token from DOM (rails injects it on load)
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  var controller = this;

  //trip types for select in html
  this.TRIPTYPE = ['Summer', 'Winter', 'Family', 'Honeymoon', 'Other'];
  this.newTripTripType = "Other";

  var getTrips = function() {
    // get trips for current User
    $http.get('/trips').success(function(data) {
      //add trips to controller, data comes back with user
      controller.current_user_trips = data.trips;
    });
  }
getTrips();

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
      authenticity_token: authenticity_token,
      trip: {
          title: this.newTripTitle,
          destination: this.newTripDestination,
          description: this.newTripDescription,
          start_date: this.newTripStartDate,
          end_date: this.newTripEndDate,
          trip_type: this.newTripTripType,
          notes: this.newTripNotes
      }
    }).success(function(data){
      controller.current_user_trips.pop();
      controller.current_user_trips.push(data.trip);

      getTrips();
    });
  }

  this.createComment = function(trip_id) {
    console.log(this.newComment);
    console.log(trip_id);
  }

}]);
