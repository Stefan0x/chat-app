var expect = require('expect');

var {generateMessage} = require('./message');

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
