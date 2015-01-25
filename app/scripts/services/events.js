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
			new Event( new Date(2015, 0, 20, 9, 30), new Date(2015, 0, 20, 14, 0), 'Al Di Meola'),
	    	new Event( new Date(2015, 0, 21, 9, 15), new Date(2015, 0, 21, 12, 30), 'Paco De Lucia'),
	    	new Event( new Date(2015, 0, 24, 12, 0), new Date(2015, 0, 24, 15, 30), 'John McLaughlin'),
	    	new Event( new Date(2015, 0, 24, 15, 0), new Date(2015, 0, 24, 18, 30), 'Django Reinhardt')
		];
        return events;
    }

    function setConcurrent(events) {
    	events.sort( function(a,b) {
    		return a.getStartDate() - b.getStartDate();
    	});
    	events.forEach( function(element, index, array) {
    		if(index < array.length-1) {
    			for (var i = index; i < array.length; i++) {
    				element.setConcurrent(element.getConcurrent()+1);
    			};
    		}
    	});
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
			return 100 * (startDate.getHours() * 60 + startDate.getMinutes())/1440;//1 day = 24*60 min
		};
		this.getPercentWidth = function() {
			return 100;
		};
		this.getPercentLeft = function() {
			return 0;
		}
		this.getZindex= function() {
			return 1;
		}

	}


    return {
      getEventsForDay : function(date) {
      	var events = getAllEvents();
      	var dayEvents = [];
      	for (var i = 0; i < events.length; i++) {
      		if(events[i].getStartDate().toDateString() === date.toDateString() || events[i].getEndDate().toDateString() === date.toDateString()) {
      			dayEvents.push(events[i]);
      		}
      	}
      	return dayEvents;
      }
    };
  });
