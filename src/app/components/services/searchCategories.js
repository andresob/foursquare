(function() {
  'use strict';

  angular
    .module('softruck')
    .factory('searchCategories', searchCategories);

  searchCategories.$inject = ['baseUrlApi', '$resource', 'requestParms'];

  function searchCategories(baseUrlApi, $resource, requestParms) {

    var requestUri = baseUrlApi + 'categories';

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
