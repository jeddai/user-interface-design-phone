(function() {

  'use strict';

  angular.module('uid')
  .controller('PhoneController', phoneController);

  function phoneController($state) {
    var vm = this;

    vm.toCall = '';

    vm.mainButtons = [
      {
        label: '1',
        text: '1'
      },
      {
        label: '2',
        text: '2'
      },
      {
        label: '3',
        text: '3'
      },
      {
        label: '4',
        text: '4'
      },
      {
        label: '5',
        text: '5'
      },
      {
        label: '6',
        text: '6'
      },
      {
        label: '7',
        text: '7'
      },
      {
        label: '8',
        text: '8'
      },
      {
        label: '9',
        text: '9'
      },
      {
        label: '#',
        text: '#'
      },
      {
        label: '0',
        text: '0'
      },
      {
        label: '*',
        text: '*'
      }
    ];

    vm.addText = addText;
    vm.erase = erase;
    vm.call = call;

    function addText(val) {
      if(vm.toCall.length > 10) return;
      vm.toCall += val;
    }

    function erase() {
      vm.toCall = vm.toCall.slice(0, -1);
    }

    function call() {
      $state.go('Calling', { num: vm.toCall });
    }
  }

})();
