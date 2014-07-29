describe('books specs', function() {
  var ctrl,
  scope;

  beforeEach(module('moviecityApp'));

  var selected_book = {
    name: 'Pepe',
    table_contents: [
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

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('BooksCtrl', {
      $scope: scope
    });
    scope.selected_book = selected_book;
  }));

  it('Should add Category at level 1 with empty children', function() {
    var category = {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    };
    scope.add_category(category,'new Category');
    expect(category.children[0].content).toBe('new Category');
  });

    it('Should add Category at level 1 with not empty children', function() {
    var category = {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    };
    scope.add_category(category,'new Category');
    scope.add_category(category,'new Category2');
    expect(category.children[1].content).toBe('new Category2');
  });

   it('Should set the order to 3 in the last push', function() {
    var category = {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    };

    scope.add_category(category,'new Category');
    scope.add_category(category,'new Category2');
    console.log(JSON.stringify(category,null,' '));
    expect(category.children[1].order).toBe(3);
  });

  it('Should add Category at level 1', function() {
    // scope.add_category(1,2);

  });

});

