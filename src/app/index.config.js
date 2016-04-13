(function() {
  'use strict';

  angular
    .module('softruck')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
