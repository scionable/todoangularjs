;(function() {
  angular.module('todoApp', ['ui.router']).config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/templates/index.html'
        })
        .state('contacts', {
          url: '/contacts',
          template: '<h3>contacts!</h3>'
        })
        .state('todo', {
          url: '/todo',
          //template: '<h3>task-list!</h3>'
          component: 'todo'
        })
        .state('registration', {
          url: '/registration',
          component: 'registration'
        })
    }
  ])
})()
