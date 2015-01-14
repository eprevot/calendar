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
            var events = ['lune', 'mars', 'mercure', 'jupiter', 'venus', 'saturne', 'soleil'];
            return events;
      }
    };
  });
