(function() {

  'use strict';

  angular.module('uid')
  .service('DataService', dataService);

  function dataService() {
    var service = this;

    service.contacts = [
      {
        id: 0,
        name: 'Cooper Humphreys',
        phone: '(615)-555-7408'
      },
      {
        id: 1,
        name: 'Sarah Humphreys',
        phone: '(865)-555-8602'
      },
      {
        id: 2,
        name: 'Elizabeth Humphreys',
        phone: '(901)-555-5309'
      },
      {
        id: 3,
        name: 'Mark Humphreys',
        phone: '(615)-555-6501'
      }
    ];
    service.messages = [
      {
        to: 1,
        messages: [
          {
            from: 1,
            content: 'Hey!'
          },
          {
            from: -1,
            content: 'Hey Sarah!'
          }
        ]
      },
      {
        to: 3,
        messages: [
          {
            from: 3,
            content: 'Hey what\'s your plan for dinner?'
          },
          {
            from: -1,
            content: 'Nothing yet, why?'
          },
          {
            from: 3,
            content: 'Nash pizza sound good?'
          }
        ]
      }
    ];

    service.settings = {
      vibrate: false,
      notify: true
    }
  }
})();