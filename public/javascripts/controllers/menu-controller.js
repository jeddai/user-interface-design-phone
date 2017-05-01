(function () {

  'use strict';

  angular.module('uid')
  .controller('MenuController', menuController);

  function menuController(NavService, $state) {
    var vm = this;
    vm.nav = NavService;
    vm.go = go;

    vm.links = [
      {
        icon: 'fa fa-phone fa-4x',
        text: 'Phone',
        state: 'Phone'
      },
      {
        icon: 'fa fa-comments fa-4x',
        text: 'Messages',
        state: 'Messages'
      },
      {
        icon: 'fa fa-address-book fa-4x',
        text: 'Contacts',
        state: 'Contacts'
      },
      {
        icon: 'fa fa-universal-access fa-4x',
        text: 'Help',
        state: 'Help'
      },
      {
        icon: 'fa fa-gear fa-4x',
        text: 'Settings',
        state: 'Settings'
      }
    ];

    function go(place) {
      vm.nav.goHome = true;
      $state.go(place);
    }
  }

})();
