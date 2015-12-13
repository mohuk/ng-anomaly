var fs = require('fs');
var jsdom = require('mocha-jsdom');
jsdom();
var angular = require('angular');
var anomaly = jsdom({
  src: fs.readFileSync('./dist/ng-anomaly.js', 'utf-8')
});
var chai = require('chai');
var expect = chai.expect;

describe('ng-anomaly', function(){

  before(function(){
    angular.module('test', ['ng-anomaly'])
      .config(configuration)
      .controller('TestCtrl', TestCtrl);

    function configuration(anomalyProvider){
      anomalyProvider.setExceptionLogUrl('http://test.com/logs');
    }

    function TestCtrl($scope){
      init();

      function init(){
        throw new Error('Throwing Test');
      }
    }

  });

  it('should make an ajax request with Ajax', function(done){

  });

});
