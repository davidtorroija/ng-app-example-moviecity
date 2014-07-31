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
            ,children: []
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
      id_book: category.id_book,
      children:[]
    })

    category.adding_category = false;
  };

  $scope.remove_category = function (category){
    $scope.selected_book.children = find_recursively($scope.selected_book.children,category);
  };

  function find_recursively(categories,category){
    // console.log(categories.length,JSON.stringify(categories,null,' '));

    _(categories).every(function(item,index){
      // console.log(index,item.level,_.isEqual(item, category));//,item,category);
      if(_.isEqual(item, category)){
        categories = _(categories).without(item);
        // console.log('equal',categories.length);
        return false;
      }
      item.children = find_recursively(item.children,category);
      return true;
    });
    return categories;
  }
});

