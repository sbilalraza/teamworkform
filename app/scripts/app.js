'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
 angular.module('home',[]);
var myapp = angular
  .module('firstAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'home'
  ]);
  myapp
  .config(function ($routeProvider) {
    // $stateProvider.state('home',{
    //   url:'/',
    //   templateUrl: 'scripts/modules/home/views/index.html',
    //     controller: 'MainController'
    // })
    $routeProvider
      .when('/ap', {
        templateUrl: 'scripts/modules/home/views/index.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
