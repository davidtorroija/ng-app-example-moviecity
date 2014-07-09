'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesEditCtrl
 * Controller of the moviecityApp
 */
angular.module('moviecityApp')
  .controller('MoviesEditCtrl', function ($scope, movie,movieModel, actors, genres) {
    movie.year = moment(movie.releaseYear).format('YYYY');
    $scope.movie = movie;
    $scope.actors = actors;
    $scope.genres = genres;


    $scope.save = function(){
      movieModel.save(movie);
    };

  });
