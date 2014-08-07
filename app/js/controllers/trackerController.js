angular.module('MinuteTracker')
  .controller('TrackerController', ['$scope', '$rootScope', 'activities', 'timer', function($scope, $rootScope, activities, timer){
    $scope.activities = activities.getAll();
    $scope.timer = timer;
    $scope.setCurrentActivity = function(activity){
      activities.setActive(activity);
      $rootScope.currentActivity = activity;
    };
  }])