angular.module('MinuteTracker')
  .factory('activities', ['$rootScope', '$interval', 'timer', function($rootScope, $interval, timer){
    var activities = [];
    var currentActivity;
    var intervalPromise;

    var Activity = function(name, color, duration){
      this.name = name;
      this.color = color;
      this.duration = duration;
    }

    Activity.prototype.getDurationPct = function(){
      return (this.duration / activities.reduce(function(sum, num){
        return sum+ num.duration
      },0))*100
    }

    activities.push(new Activity('Reading', 'peace', 0))
    activities.push(new Activity('Web surfing', 'info', 0))
    activities.push(new Activity('Writing code', 'success', 0))
    activities.push(new Activity('Hea-ing', 'danger', 0))

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