
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
  this.down = function() {
    return --temperature;
  }
  this.switchMode = function() {
    count++
    currentMode = mode[count%4]  
  }
  this.showModeTemperature = function() {
    console.log('Mode: ' + currentMode )
    console.log('Temperature: ' + temperature )
  }
  this.setTimer = function(milisec) {
    setTimeout(function(){ state = false
      console.log('Turned off because of timer')
    }, milisec);
  }
}

// var counter = new remoteControl();
// var counter1 = new remoteControl();

// console.log( counter1.powerButton() ); // ?
// counter1.setTimer(10000);
// console.log( counter1.powerButton() ); // ?

// console.log( counter1.up() ); // ?
// console.log( counter1.up() );  
// console.log( counter1.up() ); // ?
// console.log( counter1.up() ); 
// console.log( counter1.down() ); // ?
// console.log( counter1.down() );  
// counter1.switchMode()
// counter1.switchMode()
// counter1.switchMode()
// console.log( counter1.up() );
// counter1.showModeTemperature()

// console.log( counter.powerButton() ); // ?
// console.log( counter.powerButton() ); // ? // ?
// console.log( counter.powerButton() ); // ? // ?
// console.log( counter.up() ); // ?
// console.log( counter.up() );  
// console.log( counter.up() );
// counter.switchMode()
// counter.switchMode()
// counter.switchMode()
// counter.switchMode()
// console.log( counter.up() );
// counter.showModeTemperature()