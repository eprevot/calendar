var app = angular.module('calApp', []);

app.factory('calService', ['$http',
  function($http) {
    this.getDays = function(date) {
      if (date == null || !(date instanceof Date) ) {
        date = new Date();
      }

      var day = date.getDay();
      var days = [];
      for (var i = 0; i < 7; i++) {
        days[i] = date.setDate(date.getDate() - day + i);
      }

      return days;
    };

    this.getEvents = function() {
      //here I use $http to get the list of events
      events = ["lune", "mars", "mercure", "jupiiter", "venus", "satyurne", "soleil"];
      return events;
    };
  }
]);

app.controller('CalController', ['$scope', 'calService',
  function($scope) {

    daysName = calService.getDays();
    daysEvents = calService.getEvents();
    for (var i = 0; i < 7; i++) {
      $scope.days[i] = new Day(daysName[i], daysEvents[i]);
    };
 }
]);

function Day(name, content) {
	this.name = name;
	this.content = content;
}

function Calendar(container, start_date, events) {
	this.container = container;
	this.start_date = start_date;
	this.events = events;
}

