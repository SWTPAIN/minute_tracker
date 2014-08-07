angular.module('MinuteTracker')
  .filter('prettyTime', function(){
    return function(second){
      var s = second % 60;
      var m = (second - s) % (60*60)
      var h = (second - m - s ) / (60*60)
      var time = h ? h+'hr'+m+'min'+s+'sec' : m ? m+'min'+s+'sec' : s + 'sec'
      return time
    }
  })