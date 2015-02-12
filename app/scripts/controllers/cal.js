'use strict';

function Day(timestamp, events) {
	//public methods
	this.getName = function() {
		return timestamp.toDateString();
	};
	this.getEvents = function() {
		return events;
	};
}

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
	.controller('CalCtrl', function($scope, week, events) {
		var currentDate = new Date();
		var daysTime = week.getDays(currentDate);

		$scope.currentDate = currentDate;
		$scope.days = [];
		for (var i = 0; i < 7; i++) {
			$scope.days[i] = new Day(daysTime[i], events.getEventsForDay(daysTime[i]));
		}
	});



