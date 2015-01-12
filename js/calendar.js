var app = angular.module('calApp', []);
app.controller('CalController', function($scope, weekService, eventsService) {
	var daysTime = weekService.getDays();
	var daysEvents = eventsService.getEvents();
	$scope.days = [];
	for (var i = 0; i < 7; i++) {
		$scope.days[i] = new Day(daysTime[i], daysEvents[i]);
	}
});

app.factory('weekService', function() {
	
	//Transform english numerotation day (0=sunday, 1=monday, …, 6=saturday)
	//to french days (0=monday, 1=tuesday, …, 6=sunday)
	function engToFrenchDay(day)
	{
		return (day+6)%7;
	}
	
	return {
		getDays : function(date) {
			var days = [];
			if (date == null || !(date instanceof Date) ) {
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

app.factory('eventsService', function($http) {
   	return {
   		getEvents : function($http) {
   	        //here I use $http to get the list of events from server
   	        events = ["lune", "mars", "mercure", "jupiter", "venus", "saturne", "soleil"];
   	        return events;
   		}
   	};
});


function Day(timestamp, content) {
	//private attr
	var timestamp = timestamp;
	var content = content;
	
	//public methods
	this.getName = function() {
		return timestamp.toDateString();
	};
	this.getContent = function() {
		return content;
	};
}

function Calendar(container, start_date, events) {
	this.container = container;
	this.start_date = start_date;
	this.events = events;
}

