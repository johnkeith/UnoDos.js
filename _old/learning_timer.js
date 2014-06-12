$(document).ready(function(){

// start timer
// stop timer
// reset timer
// insert timer dot
// erase timer dots
// showTimerAsInt

  var Timer = function(timeMax, timerSpeed) {
    this.timePassed = 0;
    this.timeMax = timeMax;
    this.timerSpeed = timerSpeed;
    this.showTimerAsInt = function() {
      var content = "<p>The timer is set to: " + this.timePassed + "</p>";
      $('.timer-container').html(content);
    };
    this.updateTimer = function() {
      if (this.timePassed < this.timeMax) {
        this.timePassed = this.timePassed + 1;
      } else {
        this.timePassed = 0;
      }
    }

    this.start = function() {
      var _this = this;

      setInterval(function() {
        _this.showTimerAsInt();
        _this.updateTimer();
      }, this.timerSpeed);
    }
  }
  var instanceOfTimer = new Timer(2, 1000);

  instanceOfTimer.start();

  var names = ['Eric', 'ohn', 'tom'];
  var $boardContainer = $('.board-container');
  var $list = $('<ul>');

  $.each(names, function(index, name) {
    var $listItem = '<li>' + name + '</li>';
    $list.append($listItem);
  });

  $boardContainer.append($list);

  var instanceOfTimer = new Timer(2, 500);
  instanceOfTimer.start();
});
