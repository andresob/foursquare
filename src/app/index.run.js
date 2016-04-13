(function() {
  'use strict';

  angular
    .module('softruck')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
