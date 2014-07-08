'use strict';

angular.module('Model').factory('model', function($http, $q, $rootScope, $timeout) {

  return {
    doSomethingHard: function() {
      alert('3. doing something hard');

      var deferred = $q.defer();

      $timeout(function(){
        alert('4. resolving deferred');
        deferred.resolve('Hello World!');
      }, 2000);

      return deferred.promise;
    }
  };
  // var method_map = {
  //   get: 'get',
  //   post: 'create',
  //   put: 'update',
  //   delete: 'remove'
  // };

  // var handle_errors = function(method, element) {
  //   return function(response) {
  //     if(_(response.data.errors).isEmpty()) {
  //       return response.data.response;
  //     }

  //     $rootScope.$broadcast('error', {action: method_map[method], element: element, problems: response.data.errors});
  //     return $q.reject(response.data.errors);
  //   };
  // };

  // function request(method, resource, action, params) {
  //   var request_params = {};

  //   if (params !== undefined && params.data) {
  //     request_params = {data: params.data};
  //   }

  //   return
  //   // return $http[method](path, request_params)
  //   // .then(handle_errors(method, resource));
  // }



  // return function(resource) {

  //   return {

  //     request: {
  //       get: function(resource, action, params) {
  //         return request('get', resource, action, params);
  //       },

  //       create: function(resource, action, params) {
  //         return request('post', resource, action, params);
  //       },

  //       update: function(resource, action, params) {
  //         return request('put', resource, action, params);
  //       },

  //       remove: function(resource, action, params) {
  //         return request('delete', resource, action, params);
  //       }
  //     },

  //     get: function(action, params) {
  //       return this.request.get(resource, action, params);
  //     },

  //     create: function(action, params) {
  //       return this.request.create(resource, action, params);
  //     },

  //     update: function(action, params) {
  //       return this.request.update(resource, action, params);
  //     },

  //     remove: function(action, params) {
  //       return this.request.remove(resource, action, params);
  //     }
  //   };

  // };
});