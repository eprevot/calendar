'use strict';

/**
 * @ngdoc service
 * @name calendarApp.events
 * @description
 * # events
 * Factory in the calendarApp.
 */
angular.module('calendarApp')
  .factory('events', function (/*$http*/) {

  	function getAllEvents() {
        //here I use $http to get the list of events from server
        var events = [
			new Event( new Date(2014, 9, 8, 9, 30), new Date(2014, 9, 8, 14, 0), 'Al Di Meola'),
	    	new Event( new Date(2014, 9, 10, 9, 15), new Date(2014, 9, 10, 12, 30), 'Paco De Lucia'),
	    	new Event( new Date(2014, 9, 10, 12, 0), new Date(2014, 9, 10, 15, 30), 'John McLaughlin'),
	    	new Event( new Date(2015, 0, 21, 15, 0), new Date(2015, 0, 21, 18, 30), 'Django Reinhardt')
		];
        return events;
    }

    function Event(startDate, endDate, title) {
		//public methods
		this.getStartDate = function() {
			return startDate;
		}
		this.getEndDate = function() {
			return endDate;
		}
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


    return {
      getEventsForDay : function(date) {
      	var events = getAllEvents();
      	var dayEvents = [];
      	for (var i = 0; i < events.length; i++) {
      		if(events[i].startDate.toDateString() === date.toDateString() || events[i].endDate.toDateString() === date.toDateString()) {
      			dayEvents.push(events[i]);
      		}
      	}
      	return dayEvents;
      }
    };
  });
