(function() {
  'use strict';

  angular
    .module('softruck')
    .constant('baseUrlApi', 'https://api.foursquare.com/v2/venues/')
    .constant('requestParms', {
      clientId: 'LCM4QYWS1LRPMVXBWX0YX3VPMJJJU3XXSF1OGVBHHFJ25MWT',
      clientSecret: 'TXUGEFQ2QFQRH5CJ3EJLGVWRECIRLG2RGWRV3X4WSE0PZDXG',
      version: '20160413'
    });

})();
