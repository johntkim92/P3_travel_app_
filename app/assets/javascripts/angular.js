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

  // create a Trip
  this.createTrip = function() {
    $http.post('/trips', {
      authenticity_token: authenticity_token,
      trip: {
          title: "Went to Peru",
          destination: "Huaraz, Peru",
          description: "Went to the mountains",
          start_date: "03/03/2015",
          end_date: "02/02/2016",
          tags: "Honeymoon",
          notes: "Great trip. good food"
      }
    }).success(function(data){
      console.log(data);
    });
  }
}]);
