import Haiku from '../src/js/haiku.js';

describe ('Haiku', () => {
  test('should equal line', () => {
    let newHaiku = new Haiku('line');
    expect(newHaiku.line).toBe('line');
    });
  test('should return syllable count from line', () => {
    let newVowel = new Haiku('hello');
    let vowelAmount = newVowel.vowelCount(newVowel.line);
    expect(vowelAmount).toEqual(2);
  });
});