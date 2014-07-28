'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesCtrl
 * Controller of the moviecityApp
 */
 angular.module('moviecityApp')
 .controller('BooksCtrl', function ($scope) {
   $scope.books = {
    "editorial": {
      "tb_table_contents": [
        {
          "id": "1",
          "content": "Introduccion",
          "level": "1",
          "order": "1",
          "id_book": "1"
        },
        {
          "id": "2",
          "content": "Motivacion",
          "level": "2",
          "order": "2",
          "id_book": "1"
        },
        {
          "id": "3",
          "content": "Reseña Historica",
          "level": "2",
          "order": "3",
          "id_book": "1"
        },
        {
          "id": "4",
          "content": "Origen",
          "level": "3",
          "order": "4",
          "id_book": "1"
        },
        {
          "id": "5",
          "content": "Trabajos",
          "level": "3",
          "order": "5",
          "id_book": "1"
        },
        {
          "id": "6",
          "content": "Soluciones Actuales",
          "level": "2",
          "order": "6",
          "id_book": "1"
        },
        {
          "id": "7",
          "content": "Objetivos",
          "level": "2",
          "order": "7",
          "id_book": "1"
        },
        {
          "id": "8",
          "content": "Requisitos",
          "level": "1",
          "order": "8",
          "id_book": "1"
        },
        {
          "id": "9",
          "content": "Hardware",
          "level": "2",
          "order": "9",
          "id_book": "1"
        },
        {
          "id": "10",
          "content": "Software",
          "level": "2",
          "order": "10",
          "id_book": "1"
        }
      ]
    }
  }

});
