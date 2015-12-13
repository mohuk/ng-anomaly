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
