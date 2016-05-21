'use strict'

angular
  .module('starBusWeb', [
    'config',
    'cfp.loadingBar',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.router.stateHelper',
    'http-auth-interceptor',
    'pascalprecht.translate',
    'ngMaterial',
    'LocalStorageModule',
    'nvd3',
    'angularMoment'
  ]).constant('PATH', {
    root: '/',
    starbus: {
      url: '/home',
      bus: '/buses',
      line:'/lines',
      people: '/peoples',
      stop: '/books'
    }
  }).config('$translateProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 'localStorageServiceProvider', 'PATH', 'cfpLoadingBarProvider', '$routeProvider',function($translateProvider, $httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, localStorageServiceProvider, PATH, cfpLoadingBarProvider, $routeProvider){
    $stateProvider.state('starbus.line', {
      url: PATH.starbus.line,
      templateUrl: 'components/line/chartline.html',
      controller: 'ChartLineCtrl as ctrl',
      data: {
            requireLogin: false,
            topMenuPosition: 1
      },
      resolve: {
        chartData: ['ChartLineFactory', '$stateParams', function(ChartLineFactory, $stateParams) {
          return ChartLineFactory.requestTray();
        }]
      }
    });
    $urlRouterProvider.otherwise(function () {
		    return '/';
	  });
  });
