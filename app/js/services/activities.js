angular.module('MinuteTracker')
  .factory('activities', ['$rootScope', '$interval', 'timer', function($rootScope, $interval, timer){
    var activities = [
      {name: 'Reading', color: 'peace', duration: 0},
      {name: 'Web surfing', color: 'info', duration: 0},
      {name: 'Writing code', color: 'success', duration: 0},
      {name: 'Heaing', color: 'danger', duration: 0}
    ];
    var currentActivity;
    var intervalPromise;

    return {
      getAll: function(){
        return activities;
      },
      getCurrent: function(){
        return currentActivity ;
      },
      setActive: function(activity){

        if ($rootScope.currentActivity != activity){
          timer.start();
        }
        // $rootScope.$broadcast('timer-stop');
        // $rootScope.$broadcast('timer-start');

        if (intervalPromise) {
          $interval.cancel(intervalPromise);
        }

        intervalPromise = $interval(function(){
          activity.duration +=1;
        }, 1000);
      }
    };
  }])