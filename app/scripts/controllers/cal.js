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

		//private members
		var currentDate;
		var daysTime;

		function setDays() {
			$scope.currentDate = currentDate;
			$scope.days = [];
			for (var i = 0; i < 7; i++) {
				$scope.days[i] = new Day(daysTime[i], events.getEventsForDay(daysTime[i]));
			}
		}

		function init() {
			currentDate = new Date();
			daysTime = week.getDays(currentDate);
			setDays();
		}

		$scope.prevWeek = function() {
			currentDate.setDate(currentDate.getDate() -7);
			daysTime = week.getDays(currentDate);
			setDays();
		};

		$scope.nextWeek = function() {
			currentDate.setDate(currentDate.getDate() +7);
			daysTime = week.getDays(currentDate);
			setDays();
		};

		events.getAllEvents().promise.then(init);
	});
