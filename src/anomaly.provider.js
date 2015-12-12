(function(){

  'use strict';

  angular.module('ng.anomaly', [])
    .provider('anomaly', anomaly);

  /* ngInject */
  function anomaly(){

    var logUrl;
    var reqHeaders;

    this.setExceptionLogRoute = function(url){
      logUrl = url;
    };

    this.setHeaders = function(headers){
      if(headers.constructor !== Object){
        throw Error('headers should be an Object');
      }
      else{
        reqHeaders = angular.extend({}, headers);
      }
    };

    /* ngInject */
    this.$get = function(){

    };

  }

}());
