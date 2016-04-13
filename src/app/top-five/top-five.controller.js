(function() {
  'use strict';

  angular
    .module('softruck')
    .controller('TopFiveController', TopFiveController);

  TopFiveController.$inject = ['searchTrendings'];

  /** @ngInject */
  function TopFiveController(searchTrendings) {
    var vm = this;
    vm.getPlaces = getPlaces;


    vm.results = [];


    function getPlaces() {
      vm.loading = true;
      searchTrendings.get({ near: vm.address, limit: 100 }).$promise.then(function (data) {
        vm.loading = false;
        vm.results = data.response;
      })
      .catch(function () {
        alert('Error');
      });
    }

  }
})();
