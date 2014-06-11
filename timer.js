// stop timer
// insert timer dot
// erase timer dots

var Timer = function(timeMax, timerSpeed) {
  this.timePassed = 0;
  this.timeMax = timeMax;
  this.timerSpeed = timerSpeed;
};

Timer.prototype.start = function() {
  var _this = this;

  setInterval(function() {
    _this.showTimerAsInt();
    _this.updateTimer();
  }, this.timerSpeed);
}

Timer.prototype.updateTimer = function() {
  if (this.timePassed < this.timeMax) {
    this.timePassed = this.timePassed + 1;
  } else {
    this.timePassed = 0;
  }
}

Timer.prototype.showTimerAsInt = function() {
  var content = "<p>The timer is set to: " + this.timePassed + "</p>";
  $('.timer-container').html(content);
};
