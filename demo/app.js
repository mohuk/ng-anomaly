(function(){

  'use strict';

  angular.module('app', ['ng-anomaly'])
    .config(configuration)
    .controller('AppCtrl', TestCtrl);

  function configuration(anomalyProvider){
    anomalyProvider.setExceptionLogUrl('/logs');
  }

  function TestCtrl($scope){
    init();

    function init(){
      throw new Error('Throwing Test');
    }
  }

}());
