'use strict';

/**
 * @ngdoc overview
 * @name ajsApp
 * @description
 * # ajsApp
 *
 * Main module of the application.
 */
angular
  .module( 'ajsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ] )
  .config( function ( $routeProvider )
  {
    $routeProvider
      .when( '/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
      } )
      .when( '/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
      } )
      .otherwise( {
        redirectTo: '/order'
      } );
  } );
