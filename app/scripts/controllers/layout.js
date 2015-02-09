'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the calendarApp layout
 */
angular.module('calendarApp')
	.controller('LayoutCtrl', function($scope, $location) {

		function menuClicked($state) {
			$scope.homeActive = $state === '/';
			$scope.aboutActive = $state === '/about';			
		}
		$scope.menuClicked = menuClicked;

		menuClicked($location.path());
	});



