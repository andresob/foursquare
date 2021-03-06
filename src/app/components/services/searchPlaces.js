(function() {
  'use strict';

  angular
    .module('softruck')
    .factory('searchPlaces', searchPlaces);

  searchPlaces.$inject = ['baseUrlApi', '$resource', 'requestParms'];

  function searchPlaces(baseUrlApi, $resource, requestParms) {

    var requestUri = baseUrlApi + 'search';

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
