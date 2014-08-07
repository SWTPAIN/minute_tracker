angular.module('MinuteTracker')
  .controller('TrackerController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.activities = [
      {name: 'Reading', color: 'peace'},
      {name: 'Web surfing', color: 'info'},
      {name: 'Writing code', color: 'success'},
      {name: 'Heaing', color: 'danger'}
    ];
    $scope.setCurrentActivity = function(activity){
      $rootScope.currentActivity = activity;
    }
  }])