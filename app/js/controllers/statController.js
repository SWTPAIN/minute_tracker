angular.module('MinuteTracker')
  .controller('StatController', ['$scope', 'activities', function($scope, activities){
    $scope.today = new Date();
    $scope.activities = activities.getAll();
  }])