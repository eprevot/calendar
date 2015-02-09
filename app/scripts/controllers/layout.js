'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the calendarApp layout
 */
angular.module('calendarApp')
	.controller('LayoutCtrl', function($scope, $rootScope) {

		$rootScope.$on('$routeChangeSuccess', function (event, current) {
			$scope.aboutActive = current.originalPath === '/about';			
			$scope.homeActive = !$scope.aboutActive;
		});
	});



