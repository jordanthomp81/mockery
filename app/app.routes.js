angular.module('mockery')
	
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          .when('/', {
              templateUrl : '/app/components/home/index.html',
              controller : 'homeController',
              controllerAs: 'home'
          })

      $locationProvider.html5Mode(true);
  }]);