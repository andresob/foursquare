(function() {
  'use strict';

  angular
    .module('softruck')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('map', {
        url: '/heat-map',
        templateUrl: 'app/map/map.html',
        controller: 'MapController',
        controllerAs: 'map'
      })
      .state('places', {
        url: '/places',
        templateUrl: 'app/places/places.html',
        controller: 'PlacesController',
        controllerAs: 'places'
      })
      .state('start', {
        url: '/',
        templateUrl: 'app/start/start.html'
      })
      .state('top-five', {
        url: '/top-five',
        templateUrl: 'app/top-five/top-five.html',
        controller: 'TopFiveController',
        controllerAs: 'topFive'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
