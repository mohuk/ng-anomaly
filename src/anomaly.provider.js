(function(angular){

  'use strict';

  angular.module('ng-anomaly')
    .provider('anomaly', anomaly);

  /* ngInject */
  function anomaly(){

    var logUrl;
    var reqHeaders;

    this.setExceptionLogUrl = function(url){
      logUrl = url;
    };

    /* ngInject */
    this.$get = function($log, $window, Ajax){
      var ajax = new Ajax();
      return function log(exception, cause){
        try{
          var errorMessage = exception.toString();
          var data = {
            level: 'ERROR',
            message: {
              errorUrl: $window.location.href,
              errorMessage: errorMessage,
              stackTrace: exception.stack,
              cause: cause || ''
            }
          };

          ajax.post(logUrl, {data: JSON.stringify(data)});
        }
        catch(loggingError){
          $log.warn('Error logging failed');
          $log.log(loggingError);
        }
      };
    };

  }

}(angular));
