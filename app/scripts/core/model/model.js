'use strict';

angular.module('Model')
.factory('model', function($http, $q, $rootScope, $timeout,$localStorage) {
  $localStorage.i = $localStorage.i || 1;
  return function(table){
    return {
      get: function() {
        var deferred = $q.defer();

        $timeout(function(){
          deferred.resolve($localStorage.i++);
        }, 2000);

        return deferred.promise;
      }
    };
  };
});