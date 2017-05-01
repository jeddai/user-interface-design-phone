(function() {

  'use strict';

  angular.module('uid')
  .controller('MessagesController', messagesController);

  function messagesController(DataService) {
    var vm = this;

    vm.data = DataService;
    vm.newMessage = {
      from: -1
    }
    vm.who = who;
    vm.select = select;
    vm.send = send;

    function who(m) {
      return m.from === -1 ? 'text-right' : 'text-left';
    }

    function select(m) {
      vm.selected = m;
    }

    function send(m) {
      vm.selected.messages.push(angular.copy(vm.newMessage));
      vm.newMessage = {
        from: -1
      }
    }
  }

})();