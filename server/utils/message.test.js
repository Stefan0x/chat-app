var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Arnold';
    var text = 'I\'ll be back!';
    var res = generateMessage(from,text);

    expect(res).toEqual({
      from,
      text,
      createdAt: expect.any(Number)
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Admin';
    var lat = 47.123456;
    var lng = -8.52536;
    var res = generateLocationMessage(from,lat,lng);

    expect(res).toEqual({
      from,
      createdAt: expect.any(Number),
      url: expect.any(String)
    });
    expect(res.url).toMatch('https://www.google.com/maps?q=47.123456,-8.52536');
  });
});
