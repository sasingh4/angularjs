'use strict';

/**
 * @ngdoc overview
 * @name healthliveApp
 * @description
 * # healthliveApp
 *
 * Main module of the application.
 */

angular
  .module('healthliveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid', 
    'ui.grid.edit', 
    'ui.grid.rowEdit', 
    'ui.grid.cellNav', 
    'addressFormatter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/subscribers', {
        templateUrl: 'views/subscribers.html',
        controller: 'SubscribersCtrl',
        controllerAs: 'subscribers'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

