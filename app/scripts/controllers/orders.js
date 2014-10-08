'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the ajsApp
 */
angular.module( 'ajsApp' )
  .controller( 'OrdersCtrl', function ( $scope, OrderFactory )
  {
    $scope.orders = [];

    $scope.getOrders = function ()
    {
      OrderFactory.list()
        .success( function ( data )
        {
          $scope.orders = data;
        } )
        .error( function ( err )
        {
          console.error( err );
        } );
    };

    $scope.getOrders();

  } );
