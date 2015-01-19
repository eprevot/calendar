'use strict';

/**
 * @ngdoc service
 * @name calendarApp.week
 * @description
 * # week
 * Factory in the calendarApp.
 */
angular.module('calendarApp')
  .factory('week', function () {

  //Transform english numerotation day (0=sunday, 1=monday, …, 6=saturday)
  //to french days (0=monday, 1=tuesday, …, 6=sunday)
    function engToFrenchDay(day)
    {
      return (day+6)%7;
    }
    
    return {
      getDays : function(date) {
        var days = [];
        if (date === null || !(date instanceof Date) ) {
          date = new Date();
        }
      
        var day = engToFrenchDay(date.getDay());
        var frenchi;
        for (var i = 0; i < 7; i++) {
          frenchi = engToFrenchDay(i);
          days[frenchi] = new Date(date.getTime() + (frenchi-day) * 86400000);//1 day = 24*60*60*1000 ms
        }
        
        return days;
      }
    };
  });
