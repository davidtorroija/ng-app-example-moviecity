'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviecityApp
 */
angular.module('moviecityApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
