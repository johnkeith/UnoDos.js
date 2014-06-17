// stop timer
// insert timer dot
// erase timer dots

function Timer(timeMax, timerSpeed) {
  this.timePassed = 0;
  this.timeMax = timeMax;
  this.timerSpeed = timerSpeed;
  this.container = $('.timer-container');
}

Timer.prototype.startTimer = function() {
  var _this = this;

  _this.timerRunning = setInterval(function() {
    _this.showTimerAsInt();
    _this.updateTimer();
  }, this.timerSpeed);
};

Timer.prototype.resetTimer = function() {
  delete this.timerRunning;
  this.start();
};

Timer.prototype.updateTimer = function() {
  if (this.timePassed < this.timeMax) {
    this.timePassed = this.timePassed + 1;
  } else {
    this.timePassed = 0;
    checkAndInsert();
  }
};

Timer.prototype.showTimerAsInt = function() {
  var content = "<p>The timer is set to: " + this.timePassed + "</p>";
  $('.timer-container').html(content);
};
