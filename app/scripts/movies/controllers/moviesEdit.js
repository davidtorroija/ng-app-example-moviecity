'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesEditCtrl
 * Controller of the moviecityApp
 */
angular.module('moviecityApp')
  .controller('MoviesEditCtrl', function ($scope, movie,movieModel) {
    movie.year = moment(movie.releaseYear).format('YYYY');
    $scope.movie = movie;

    $scope.save = function(){
      movieModel.save(movie);
    };

  });
