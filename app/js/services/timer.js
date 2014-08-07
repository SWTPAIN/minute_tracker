angular.module('MinuteTracker')
  .factory('timer', ['$rootScope', '$interval', function($rootScope, $interval){
    var timer = {
      startTime: null,
      start: function(){
        this.startTime = Date.now();
      },
      getTime: function(){
        if (this.startTime)
          return Math.floor((Date.now() - this.startTime)/1000)
        else
          return 0;
      } 
    };

    return timer ;
  }])