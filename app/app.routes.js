angular.module('mockery')
	
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          .when('/app', {
              templateUrl : '/app/components/home/index.html',
              controller : 'homeController',
              controllerAs: 'home'
          }).when('/', {
              templateUrl : '/app/components/wireframe/index.html',
              controller : 'wireframeController',
              controllerAs: 'wireframe'
          })

      $locationProvider.html5Mode(true);
  }]);