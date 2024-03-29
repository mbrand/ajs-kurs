'use strict';

xdescribe('Controller: OrdersCtrl', function () {

  // load the controller's module
  beforeEach(module('ajsApp'));

  var OrdersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrdersCtrl = $controller('OrdersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
