(function() {
  'use strict';

  angular
    .module('softruck')
    .controller('MapController', MapController);

  MapController.$inject = ['searchPlaces', 'userLocation', '$scope', '$log'];

  /** @ngInject */
  function MapController(searchPlaces, userLocation, $scope, $log) {
    var vm = this;
    vm.getPlaces = getPlaces;

    _getCenter();
    var data = [];
    vm.center =  { lat: 37.774546, lng: -122.433523, zoom: 15 };
    vm.layers = {
        baselayers: {
            mapbox_light: {
                name: 'OpenStreetMap',
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                type: 'xyz'
            }
        }
    };
    vm.layers.overlays = {
        heat: {
            name: 'Heat Map',
            type: 'heat',
            data: data,
            layerOptions: { radius: 20, blur: 8 },
            visible: true
        }
    };


    function getPlaces() {
      if (angular.isUndefined(vm.address) || vm.address === '') {
        return;
      }
      else {
        searchPlaces.get({ near: vm.address, radius: 100000, limiti: 100 }).$promise.then(function (data) {
          vm.results = data.response;
          _centerMap();
          _formatData();
        })
        .catch(function () {
          alert('Error');
        });
      }
    }


    function _centerMap() {
      vm.center = { lat: vm.results.geocode.feature.geometry.center.lat, lng: vm.results.geocode.feature.geometry.center.lng, zoom: 15 };
    }


    function _formatData() {
      angular.forEach(vm.results.venues, function(value) {
          data.push([value.location.lat, value.location.lng]);
      });
    }


    function _getCenter() {
      userLocation.get().then(function (response) {
        var location = response.data.loc;
        vm.center = { lat: parseInt(location.split(',')[0]), lng: parseInt(location.split(',')[1]), zoom: 15 };
      })
    }


    $scope.$on('leafletDirectiveMap.dragend', function(event, gh) {
      var lat = gh.model.lfCenter.lat.toString();
      var lng = gh.model.lfCenter.lng.toString();
      var latlng = lat + ',' + lng;
      searchPlaces.get({ ll: latlng, radius: 100000, limiti: 100 }).$promise.then(function (data) {
        vm.results = data.response;
        _formatData();
      })
      .catch(function () {
        alert('Error');
      });
    });

  }
})();
