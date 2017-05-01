(function() {

  'use strict';

  angular.module('uid')
  .controller('SettingsController', settingsController);

  function settingsController(DataService) {
    var vm = this;

    vm.data = DataService;
  }

})();