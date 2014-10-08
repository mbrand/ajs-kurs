'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ajsApp
 */
angular.module('ajsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
