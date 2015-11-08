var app = angular.module('TravelApp', []);

app.controller('HeaderController', ['$http', function($http) {
  var controller = this;
  $http.get('/session').success(function(data) {
    controller.current_user = data.current_user;
    console.log(controller.current_user);
  });
}]);

app.controller('TripsController', ['$http', function($http) {
this.foo = 'bar';
}]);
