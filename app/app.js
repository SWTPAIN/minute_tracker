angular.module('MinuteTracker', ['ngRoute'])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'TrackerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
