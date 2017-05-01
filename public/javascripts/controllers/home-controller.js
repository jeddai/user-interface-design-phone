(function () {

  'use strict';

  angular.module('uid')
  .controller('HomeController', homeController);

  function homeController(NavService, $state) {
    var vm = this;
    vm.nav = NavService;
    vm.goHome = goHome;
    vm.getDate = getDate;

    function goHome() {
      vm.nav.goHome = false;
      $state.go('Menu');
    }

    function getDate() {
      return new Date();
    }
  }

})();
