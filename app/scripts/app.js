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
    // 'ngCookies',
    // 'ngResource',
    'ngRoute',
    'Movies'
  ])
  //routes config!
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies/edit/:idMovie', {
        templateUrl: 'scripts/movies/views/movieEdit.html',
        controller: 'MoviesEditCtrl',
        resolve: {
          movie: function($location,$route,movieModel) {
            console.log(movieModel);
            var id = $route.current.params.idMovie;
            // console.log('goa',movieModel);
            // return movieModel.doSomethingHard('movie',id)
            // .catch(function() {
            //   $location.path('/');
            // });
          },
        }
      })
      .when('/movies/:idMovie', {
        templateUrl: 'scripts/movies/views/movie.html',
        controller: 'MoviesCtrl',
        resolve: {
          movie: function($location,$route) {
            // console.log($route.current.params.idMovie,$location);
            var id = $route.current.params.idMovie;
            var movieModel = {
              getById:function(){
                return {
                  id: 1,
                  name:'The Terminator',
                  releaseYear: new Date('1985/08/26'),
                  grossIncome:38400000,
                  actors:[
                    {
                      id:1,
                      fullName:'Arnold Schwarzenegger',
                      birthdate:'1955/5/5',
                      movies: [{name:'True Lies',id:2}],
                    },
                    {
                      id:2,
                      fullName:'Linda Hamilton',
                      birthdate:'1955/5/5',
                      movies: [{name:'Song',id:3}],
                    }
                  ],
                  directorName: 'James Cameron',
                  rating: 8.1,
                  genre: 'Action, Suspense, Sci-Fi',
                  imageURL: 'http://ia.media-imdb.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX214_AL_.jpg'
                };
              }
            };
            return movieModel.getById('movie',id);
            // .catch(function() {
            //   $location.path('/');
            // });
          },
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
