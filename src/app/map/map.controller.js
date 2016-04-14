(function() {
  'use strict';

  angular
    .module('softruck')
    .controller('MapController', MapController);

  MapController.$inject = ['searchPlaces'];

  /** @ngInject */
  function MapController(searchPlaces) {
    var vm = this;
    vm.getPlaces = getPlaces;


    vm.center = { lat: 51.505, lng: -0.09, zoom: 8 };
    vm.results = [];


    function centerMap() {
      vm.center = { lat: vm.results.geocode.feature.geometry.center.lat, lng: vm.results.geocode.feature.geometry.center.lng, zoom: 15 };
    }


    function getPlaces() {
      searchPlaces.get({ near: vm.address }).$promise.then(function (data) {
        vm.results = data.response;
        centerMap();
      })
      .catch(function () {
        alert('Error');
      });
    }

  }
})();
