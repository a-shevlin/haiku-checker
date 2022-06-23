import Haiku from '../src/js/haiku.js';

describe ('Haiku', () => {
  test('should equal line', () => {
    let newHaiku = new Haiku('line');
    expect(newHaiku.line).toBe('line');
    });
});