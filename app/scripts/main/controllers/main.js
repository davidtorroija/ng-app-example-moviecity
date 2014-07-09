'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesEditCtrl
 * Controller of the moviecityApp
 */
angular.module('moviecityApp')
  .controller('MainCtrl', function ($scope, movies) {
    $scope.movies = movies;
  });
