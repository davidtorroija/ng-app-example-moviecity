'use strict';

angular.module('Movies').factory('movieModel', function(model){
  model.doSomethingHard().then(function(data){
    console.log('yeaahhhh',data);
  });
  // return model('movies');
});