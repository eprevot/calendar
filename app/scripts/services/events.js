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

    function Event(startDate, endDate, title) {
      //private members
      var percentWidth = 100;
      var percentLeft = 0;

      //public methods
      this.getStartDate = function() {
        return startDate;
      };
      this.getEndDate = function() {
        return endDate;
      };
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
        return percentWidth;
      };
      this.setPercentWidth = function(width) {
        percentWidth = width;
      };
      this.getPercentLeft = function() {
        return percentLeft;
      };
      this.setPercentLeft = function(left) {
        percentLeft = left;
      };
      this.getZindex= function() {
        return 1;
      };
    }

  	function getAllEvents() {
        //here I use $http to get the list of events from server
        var events = [
        new Event( new Date(2015, 0, 26, 9, 30), new Date(2015, 0, 26, 14, 0), 'Al Di Meola'),
	    	new Event( new Date(2015, 0, 27, 9, 15), new Date(2015, 0, 27, 12, 30), 'Paco De Lucia'),
	    	new Event( new Date(2015, 0, 30, 10, 0), new Date(2015, 0, 30, 13, 30), 'John McLaughlin'),
        new Event( new Date(2015, 0, 30, 11, 0), new Date(2015, 0, 30, 15, 0), 'Django Reinhardt'),
        new Event( new Date(2015, 0, 30, 15, 30), new Date(2015, 0, 30, 18, 0), 'Django Reinhardt4'),
        new Event( new Date(2015, 0, 30, 12, 0), new Date(2015, 0, 30, 16, 30), 'Django Reinhardt3'),
        new Event( new Date(2015, 0, 30, 11, 30), new Date(2015, 0, 30, 12, 30), 'Django Reinhardt2'),
        new Event( new Date(2015, 0, 30, 19, 30), new Date(2015, 0, 30, 20, 0), 'Django Reinhardt5')
		];
        return events;
    }

    function setConcurrent(events) {
      if(events.length === 0) {
        return;
      }

      //sort events by start date
    	events.sort( function(a,b) {
    		return a.getStartDate() - b.getStartDate();
    	});
      
      var concurrentEvents = [[events[0]]];
      var endDate = events[0].getEndDate();

      //create groups of concurrent events
    	events.forEach( function(element, index) {
    		if(index > 0) {
          //if element is concurrent, put it in the same group and change the end date of this group
    			if(endDate > element.getStartDate()) {
            concurrentEvents[concurrentEvents.length -1].push(element);
            endDate = (endDate.getTime() > element.getEndDate().getTime())? endDate : element.getEndDate();
          }
          //if element is not concurrent with previous events, create a new group with this element
          //and calculate width and left margin of each element in former group
          else {
            var width = 100/concurrentEvents[concurrentEvents.length -1].length;
            concurrentEvents[concurrentEvents.length -1].forEach( function(element, index) {
              element.setPercentWidth(width);
              element.setPercentLeft(index * width);
            });
            endDate = element.getEndDate();
            concurrentEvents.push([element]);
          }
    		}
    	});
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
        setConcurrent(dayEvents);
      	return dayEvents;
      }
    };
  });
