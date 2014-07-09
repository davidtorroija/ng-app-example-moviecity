'use strict';

/**
 * @ngdoc overview
 * @name moviecityApp
 * @description
 * # moviecityApp
 *
 * Main module of the application.
 */
angular
  .module('moviecityApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'Movies',
    'Actors',
    'Genres',
    'localytics.directives'
  ])
  //routes config!
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/views/main.html',
        controller: 'MainCtrl',
        resolve: {
          movies: function($location,$route,movieModel) {
            var id = $route.current.params.idMovie;
            return movieModel.get()
            .catch(function() {
              $location.path('/');
            });
          },
        }
      })
      .when('/movies/edit/:idMovie', {
        templateUrl: 'scripts/movies/views/movieEdit.html',
        controller: 'MoviesEditCtrl',
        resolve: {
          movie: function($location,$route,movieModel) {
            var id = $route.current.params.idMovie;
            return movieModel.getById(id)
            .catch(function() {
              $location.path('/');
            });
          },
          actors: function($location,$route, actorModel) {
            return actorModel.get()
            .catch(function() {
              $location.path('/');
            });
          },
          genres: function($location,$route, genreModel) {
            return genreModel.get()
            .catch(function() {
              $location.path('/');
            });
          },
        }
      })
      .when('/movies/:idMovie', {
        templateUrl: 'scripts/movies/views/movie.html',
        controller: 'MoviesCtrl',
        resolve: {
          movie: function($location,$route,movieModel) {
            var id = $route.current.params.idMovie;
            return movieModel.getById(id)
            .catch(function() {
              $location.path('/');
            });
          },
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
