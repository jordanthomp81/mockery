angular.module('mockery')
	
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          .when('/app', {
              templateUrl : 'components/home/index.html',
              controller : 'homeController',
              controllerAs: 'home'
          }).when('/', {
              templateUrl : 'components/wireframe/index.html',
              controller : 'wireframeController',
              controllerAs: 'wireframe'
          })

      $locationProvider.html5Mode(true);
  }]);