function remoteControl() {
  var state = false;
  var temperature = 26
  var mode = ['cool', 'dry', 'hot', 'auto']
  var count = 0
  var currentMode = mode[0]


  this.powerButton = function() {
    if (state == false)
      state = true
    else
      state = false 
    return state;
  };
  this.up = function() {
    return ++temperature;
  };
  this.down = function() {
    return --temperature;
  }
  this.switchMode = function() {
    count++
    currentMode = mode[count%4]  
  }

  this.getTemperature = function() {
    return temperature
  }

  this.getMode = function() {
    return currentMode
  }

  this.setTimer = function(milisec) {
    setTimeout(function(){ state = false
      console.log('Turned off because of timer')
    }, milisec);
  }
}

module.exports = remoteControl;
