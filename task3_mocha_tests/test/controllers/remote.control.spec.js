var assert = require('assert');
var remoteControl =  require('../../controllers/remote.control');

describe('remoteControl', function () {

  describe('validFunctions', function(){

    var remote = new remoteControl()

    it('switch on AC for first time', function(){
      var state = remote.powerButton()
      assert.equal(state, true);
    });

    it('switch off AC now', function(){
      var state = remote.powerButton()
      assert.equal(state, false);
    });

    it('check temperature', function(){
      var temperature = remote.getTemperature()
      assert.equal(temperature, '26');
    });

    it('temperature increament', function(){
      remote.up()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '27');
    });

    it('again temperature increament', function(){
      remote.up()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '28');
    });

    it('temperature dcreament', function(){
      remote.down()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '27');
    });

    it('current mode of AC', function(){
      var mode = remote.getMode()
      assert.equal(mode, 'cool');
    });

    it('change mode of AC', function(){
      remote.switchMode()
      var mode = remote.getMode()
      assert.equal(mode, 'dry');      
    });

    it('switch off AC after time set in timer', function(done){
      remote.setTimer(10000);
      done()
    });

  });

});
