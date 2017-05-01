(function() {

  'use strict';

  angular.module('uid')
  .controller('ContactsController', contactsController);

  function contactsController(DataService) {
    var vm = this;

    vm.data = DataService;
    vm.add = add;

    function add(c) {
      if(c.name && c.phone) {
        c.id = vm.data.contacts.length;
        vm.data.contacts.push(c);
        vm.selected = null;
      }
    }
  }

})();