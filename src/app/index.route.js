(function() {
  'use strict';

  angular
    .module('softruck')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'app/start/start.html'
      })
      .state('places', {
        url: '/places',
        templateUrl: 'app/places/places.html',
        controller: 'PlacesController',
        controllerAs: 'places'
      });

    $urlRouterProvider.otherwise('/start');
  }

})();
