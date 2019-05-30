var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var remoteControl =  require('../../controllers/remote.control');

describe('remoteControl', function () {

  describe('validFunctions', function(){

    var remote = new remoteControl()

    it('switch on AC for first time', function(){
      var state = remote.powerButton()
      assert.equal(state, true);
      expect(state).to.equal(true);
    });

    it('switch off AC now', function(){
      var state = remote.powerButton()
      assert.equal(state, false);
      expect(state).to.be.false;
      state.should.equal(false);
    });

    it('check temperature', function(){
      var temperature = remote.getTemperature()
      assert.equal(temperature, '26');
      expect(temperature).to.equal(26);
    });

    it('temperature increament', function(){
      remote.up()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '27');
      expect(temperature).to.equal(27);
    });

    it('again temperature increament', function(){
      remote.up()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '28');
      expect(temperature).to.equal(28);
    });

    it('increamenting temperature 30 times', function(){
      for(var i =0; i<30; i++) 
        remote.up()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '35');
      expect(temperature).to.equal(35);
    });

    it('temperature dcreament', function(){
      remote.down()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '34');
      expect(temperature).to.equal(34);
    });

    it('decreamenting temperature 50 times', function(){
      for(var i =0; i<30; i++) 
        remote.down()
      var temperature = remote.getTemperature()
      assert.equal(temperature, '10');
      expect(temperature).to.equal(10);
    });

    it('current mode of AC', function(){
      var mode = remote.getMode()
      assert.equal(mode, 'cool');
      expect(mode).to.equal('cool');
    });

    it('changing mode of AC', function(){
      for (var i=0 ; i<4 ; i++)
        remote.switchMode()
      var mode = remote.getMode()
      assert.equal(mode, 'cool');  
      expect(mode).to.equal('cool');
    });

    it('switch off AC after time set in timer', function(done){
      remote.setTimer(10000);
      done()
    });

  });

});
