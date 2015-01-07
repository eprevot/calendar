angular.module('calApp', [])
  .controller('CalController', ['$scope', function($scope) {
  	$scope.days = [
  		new Day("lundi", "lune"),
  		new Day("mardi", "mars"),
  		new Day("mercredi", "mercure"),
  		new Day("jeudi", "jupiter"),
  		new Day("vendredi", "venus"),
  		new Day("samedi", "saturne"),
  		new Day("dimanche", "soleil"),
  	];
 }]);

function Day(name, content) {
	this.name = name;
	this.content = content;
}

function Calendar(container, start_date, events) {
	this.container = container;
	this.start_date = start_date;
	this.events = events;
}

