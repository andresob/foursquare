(function() {
  'use strict';

  angular
    .module('softruck')
    .factory('userLocation', userLocation);

  userLocation.$inject = ['$http'];

  function userLocation($http) {
    return {
        get: function () {
            return $http.get("http://ipinfo.io/json");
        }
    };
  }

})();
