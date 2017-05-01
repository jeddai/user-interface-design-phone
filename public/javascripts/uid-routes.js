(function() {

  'use strict';

  angular.module('uid')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
      name: 'Menu',
      templateUrl: '/partials/menu',
      controller: 'MenuController',
      controllerAs: 'menu',
      url: '/'
    })
    .state({
      name: 'Phone',
      templateUrl: '/partials/phone',
      controller: 'PhoneController',
      controllerAs: 'phone',
      url: '/phone'
    })
    .state({
      name: 'Messages',
      templateUrl: '/partials/messages',
      controller: 'MessagesController',
      controllerAs: 'messages',
      url: '/messages'
    })
    .state({
      name: 'Calling',
      templateUrl: '/partials/calling',
      controller: 'CallingController',
      controllerAs: 'calling',
      url: '/calling/:num'
    })
    .state({
      name: 'Contacts',
      templateUrl: '/partials/contacts',
      controller: 'ContactsController',
      controllerAs: 'contacts',
      url: '/contacts'
    })
    .state({
      name: 'Help',
      templateUrl: '/partials/help',
      controller: 'HelpController',
      controllerAs: 'help',
      url: '/help'
    })
    .state({
      name: 'Settings',
      templateUrl: '/partials/settings',
      controller: 'SettingsController',
      controllerAs: 'settings',
      url: '/settings'
    });

    $urlRouterProvider.otherwise('/');
  });
})();
