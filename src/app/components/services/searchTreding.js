(function() {
  'use strict';

  angular
    .module('softruck')
    .factory('searchTrendings', searchTrendings);

  searchTrendings.$inject = ['baseUrlApi', '$resource', 'requestParms'];

  function searchTrendings(baseUrlApi, $resource, requestParms) {

    var requestUri = baseUrlApi + 'trending';

    return $resource(requestUri,
        {
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            venuePhotos: '1',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

  }

})();
