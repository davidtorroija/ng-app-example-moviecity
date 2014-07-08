'use strict';

angular.module('Model')
.factory('model', function($http, $q, $rootScope, $timeout,$localStorage, initializeLocalStorage) {

  function getById(table, id){
    return _($localStorage[table]).findWhere({id:parseInt(id)});
  }

  // function simulateAjaxCall(callback,params){
  //   var deferred = $q.defer();

  //   $timeout(function(){
  //     var result = getById(params);
  //     console.log(result);
  //     deferred.resolve(result);
  //   }, 1);

  //   return deferred.promise;
  // }

  function save(table, obj){
    console.log(obj);
    var oldObj = getById(table,obj.id);
    console.log(obj,oldObj);
    oldObj = obj;
  }

  return function(table){
    return {
      getById: function(id) {
        var deferred = $q.defer();

        $timeout(function(){
          var result = getById(table,id);
          deferred.resolve(result);
        }, 1);

        return deferred.promise;
      },
      save: function(obj) {
        var deferred = $q.defer();

        $timeout(function(){
          var result = save(table,obj);
          deferred.resolve(result);
        }, 1);

        return deferred.promise;
      },
    };
  };
});