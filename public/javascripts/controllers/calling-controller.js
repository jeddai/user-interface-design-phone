(function() {

  'use strict';

  angular.module('uid')
  .controller('CallingController', callingController);

  function callingController($state) {
    var vm = this;

    vm.number = $state.params.num;

    vm.buttons = [
      {
        label: 'Mute',
        icon: 'fa-microphone-slash fa-inverse',
        icon_active: 'fa-microphone fa-inverse',
        active: false,
        method: function() {
          this.active = !this.active;
        },
        getIcon: function() {
          return this.active ? this.icon_active : this.icon;
        }
      },
      {
        label: 'Speaker',
        icon: 'fa-volume-up fa-inverse',
        icon_active: 'fa-volume-off fa-inverse',
        active: false,
        method: function() {
          this.active = !this.active;
        },
        getIcon: function() {
          return this.active ? this.icon_active : this.icon;
        }
      }
    ];
  }

})();