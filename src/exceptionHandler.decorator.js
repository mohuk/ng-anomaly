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
