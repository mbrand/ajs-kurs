'use strict';

/**
 * @ngdoc service
 * @name ajsApp.OrderFactory
 * @description
 * # OrderFactory
 * Factory in the ajsApp.
 */
angular.module( 'ajsApp' )
  .factory( 'OrderFactory', function ( $http )
  {

    function list()
    {
      return $http.get( '/api/orders/' );
    }

    function add( order )
    {
      order.orderDate = new Date();
      order.dishLines = [];
      return $http.post( '/api/orders', order );
    }

    // Public API here
    return {
      list: function ()
      {
        return list();
      },
      add: function ( order )
      {
        return add( order );
      }
    };
  } );
