'use strict';

describe('Service: week', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var week;
  beforeEach(inject(function (_week_) {
    week = _week_;
  }));

  it('should do something', function () {
    expect(!!week).toBe(true);
  });

});
