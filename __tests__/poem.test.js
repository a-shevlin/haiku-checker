import Poem from '../src/js/poem.js';

describe ('Poem', () => {

  test('should equal "haiku"', () => {
  let newPoem = new Poem('haiku');
  expect(newPoem.type).toBe('haiku');
  });
});