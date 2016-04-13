(function() {
  'use strict';

  angular
    .module('softruck')
    .controller('PlacesController', PlacesController);

  PlacesController.$inject = ['searchCategories', 'searchPlaces'];

  /** @ngInject */
  function PlacesController(searchCategories, searchPlaces) {
    var vm = this;
    vm.getCategories = getCategories;
    vm.getPlaces = getPlaces;

    vm.results = [];


    function getCategories() {
      console.log('bla');
      searchCategories.get().$promise.then(function (data) {
        vm.categories = data.response.categories;
      })
      .catch(function () {
        alert('Error');
      })
    }


    function getPlaces() {
      vm.loading = true;
      searchPlaces.get({ near: vm.address, radius: vm.range, categoryId: vm.category}).$promise.then(function (data) {
        vm.loading = false;
        vm.results = data.response;
      })
      .catch(function () {
        alert('Error');
      });
    }

  }
})();
