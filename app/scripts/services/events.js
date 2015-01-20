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
    return {
      getEvents : function(/*$http*/) {
            //here I use $http to get the list of events from server
            var events = [
            				{startDate: new Date(2014, 9, 8, 9, 30), endDate: new Date(2014, 9, 8, 14, 0), title: 'Al Di Meola'},
					    	{startDate: new Date(2014, 9, 10, 9, 15), endDate: new Date(2014, 9, 10, 12, 30), title: 'Paco De Lucia'},
					    	{startDate: new Date(2014, 9, 10, 12, 0), endDate: new Date(2014, 9, 10, 15, 30), title: 'John McLaughlin'},
					    	{startDate: new Date(2014, 9, 10, 15, 0), endDate: new Date(2014, 9, 10, 18, 30), title: 'Django Reinhardt'}
					    ];
            return events;
      }
    };
  });
