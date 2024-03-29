'use strict';

xdescribe( 'Directive: addOrder', function ()
{

  // load the directive's module
  beforeEach( module( 'ajsApp' ) );

  var element,
    scope;

  beforeEach( inject( function ( $rootScope )
  {
    scope = $rootScope.$new();
  } ) );

  it( 'should make hidden element visible', inject( function ( $compile )
  {
    element = angular.element( '<add-order></add-order>' );
    element = $compile( element )( scope );
    expect( element.text() ).toBe( 'this is the addOrder directive' );
  } ) );
} );
