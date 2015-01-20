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


function Event(startDate, endDate, title) {
	//public methods
	this.getTitle = function() {
		return title;
	};
	this.getPercentHeight = function() {
		return 100 * (endDate - startDate)/86400000;//1 day = 24*60*60*1000 ms
	};
	this.getPercentTop = function() {
		return 100 * (startDate.getHours * 60 + startDate.getMinutes * 60)/1440;//1 day = 24*60 min
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



