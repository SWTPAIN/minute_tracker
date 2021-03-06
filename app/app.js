angular.module('MinuteTracker', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'TrackerController'
      })
      .when('/stat', {
        templateUrl: 'app/views/stat.html',
        controller: 'StatController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
