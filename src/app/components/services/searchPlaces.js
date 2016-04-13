(function() {
  'use strict';

  angular
    .module('softruck')
    .factory('searchPlaces', searchPlaces);

  searchPlaces.$inject = ['$resource', 'requestParms'];

  function searchPlaces($resource, requestParms) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(requestUri,
        {
            action: 'search',
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
