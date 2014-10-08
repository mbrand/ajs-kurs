'use strict';

describe( 'Service: OrderFactory', function ()
{

  // load the service's module
  beforeEach( module( 'ajsApp' ) );

  // instantiate service
  var OrderFactory, $httpBackend;
  beforeEach( inject( function ( _OrderFactory_, _$httpBackend_ )
  {
    OrderFactory = _OrderFactory_;
    $httpBackend = _$httpBackend_;
  } ) );

  describe( 'duck typing', function ()
  {
    it( 'add should be a function', function ()
    {
      expect( angular.isFunction( OrderFactory.add ) ).toBeTruthy();
    } );
    it( 'list should be a function', function ()
    {
      expect( angular.isFunction( OrderFactory.list ) ).toBeTruthy();
    } );
  } );

  describe( 'add', function ()
  {
    beforeEach( function ()
    {
      $httpBackend.when( 'POST', '/api/orders' ).respond( {} );
    } );

    // ensure that there are no outstanding expectation and requests
    afterEach( function ()
    {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    } );

    it( 'should call the backend', function ()
    {
      $httpBackend.expectPOST( '/api/orders' );

      OrderFactory.add( {} );

      $httpBackend.flush();
    } );
  } );

} );
