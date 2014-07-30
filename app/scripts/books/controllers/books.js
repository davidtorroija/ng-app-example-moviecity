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


  $scope.selected_book = {
    level: 0,
    content: 'Pepe',
    children: [
    {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    },
    {
      "id": "2",
      "content": "Motivacion",
      "level": "2",
      "order": "2",
      "id_book": "1"
      ,children: [
      {
        "id": "3",
        "content": "Reseña Historica",
        "level": "2",
        "order": "3",
        "id_book": "1"
        ,children: [
        {
          "id": "4",
          "content": "Level 3",
          "level": "3",
          "order": "4",
          "id_book": "1"
          ,children: [
          {
            "id": "5",
            "content": "Level 4",
            "level": "4",
            "order": "5",
            "id_book": "1"

          }]
        }]
      },
      ]
    },
    ]
  };

  $scope.add_category = function (category, new_name){
    var order = category.children.length ? _(category.children).chain().pluck('order').max().value() : parseInt(category.order);

    category.children.push({
      id: Date.now(),
      content: new_name,
      level: parseInt(category.level) +1,
      order: order +1,
      id_book: category.id_book
    })
  };

});

