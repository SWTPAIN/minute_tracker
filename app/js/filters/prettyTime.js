angular.module('MinuteTracker')
  .filter('prettyTime', function(){
    return function(second){
      var h = Math.floor(second / (60*60))
      var m = Math.floor((second - h*60*60) / 60)
      var s = (second - h*60*60 - m*60);
      var time = h ? h+'h '+m+'m '+s+'s ' : m ? m+'m '+s+'s ' : s + 's '
      return time
    }
  })