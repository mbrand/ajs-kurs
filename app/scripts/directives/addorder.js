'use strict';

/**
 * @ngdoc directive
 * @name ajsApp.directive:addOrder
 * @description
 * # addOrder
 */
angular.module( 'ajsApp' )
  .directive( 'addOrder', function ( OrderFactory )
  {
    return {
      templateUrl: 'scripts/directives/templates/addorder.html',
      restrict: 'E',
      scope: true,
      link: function postLink( $scope )
      {
        $scope.orderForm = {};

        $scope.submitOrder = function ()
        {
          OrderFactory.add( $scope.orderForm.order )
            .success( function ( data )
            {
              console.log( 'it worked!', data );
              $scope.orderForm.order = {};
            } )
            .error( function ( err )
            {
              console.error( 'a crazy error appeared', err );
            } );
        };
      }
    };
  } );
