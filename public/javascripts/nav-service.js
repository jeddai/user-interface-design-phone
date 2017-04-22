(function() {

  'use strict';

  angular.module('uid')
  .service('NavService', navService);

  function navService($state, $rootScope) {
    var service = this;

    service.goHome = false;

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
          service.goHome = toState.name !== 'Menu';
        }
    )
  }

})();
