'use strict';

/**
 * @ngdoc filter
 * @name ajsApp.filter:sumByKey
 * @function
 * @description
 * # sumByKey
 * Filter in the ajsApp.
 */
'use strict';

angular.module( 'ajsApp' )
  .filter( 'sumByKey', function ()
  {
    return function ( data, key )
    {
      if ( typeof(data) === 'undefined' || typeof(key) === 'undefined' )
      {
        return 0;
      }

      var sum = 0;
      for ( var i = data.length - 1; i >= 0; i-- )
      {
        console.log( 'here' );
        sum += parseInt( data[i][key] );
      }

      return sum;
    };
  } );

