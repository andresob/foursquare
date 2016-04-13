(function() {
  'use strict';

  angular
    .module('softruck')
    .factory('searchCategories', searchCategories);

  searchCategories.$inject = ['$resource', 'requestParms'];

  function searchCategories($resource, requestParms) {

    var requestUri = 'https://api.foursquare.com/v2/venues/categories';

    return $resource(requestUri,
        {
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

  }

})();
