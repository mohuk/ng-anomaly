/**
 * This lets you inject the module into angularjs using the commonjs require
 * syntax with browserify.
 */
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports){

 var angular = require('angular');
 var Ajax = require('@fdaciuk/ajax');

 module.exports = 'ng-anomaly';
}

(function(angular){

  'use strict';

  angular.module('ng-anomaly', [])
    .value('Ajax', Ajax);

}(angular));

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

    this.setHeaders = function(headers){
      if(headers.constructor !== Object){
        throw Error('headers should be an Object');
      }
      else{
        reqHeaders = angular.extend({
          'content-type': 'application/json'
        }, headers);
      }
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

(function(angular){

  'use strict';

  angular.module('ng-anomaly')
    .config(decorator);

  /* ngInject */
  function decorator($provide){
    $provide.decorator('$exceptionHandler', exceptionHandlerDecorator);

    function exceptionHandlerDecorator($delegate, anomaly){
      return function(exception, cause){
        $delegate(exception, cause);
        anomaly(exception);
      };
    }
  }

}(angular));
