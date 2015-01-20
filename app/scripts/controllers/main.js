'use strict';

function Day(timestamp, content) {
	//public methods
	this.getName = function() {
		return timestamp.toDateString();
	};
	this.getContent = function() {
		return content;
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
	.controller('MainCtrl', function($scope, week, events) {

		function displayEvents(events) {
			var divs = [];
			for (var i = 0; i < events.length; i++) {
				var event = new Event(events[i]);
				event.getTitle
			}			
		}

		var daysTime = week.getDays();
		$scope.days = [];
		for (var i = 0; i < 7; i++) {
			$scope.days[i] = new Day(daysTime[i], events.getEventsForDay(daysTime[i]));
		}
	});



