import Haiku from '../src/js/haiku.js';

describe ('Haiku', () => {
  test('should equal line', () => {
    let newHaiku = new Haiku('line');
    expect(newHaiku.line).toBe('line');
    });
  test('should return syllable count from line', () => {
    let newVowel = new Haiku('hello');
    let vowelAmount = newVowel.syllableCount(newVowel.line);
    expect(vowelAmount).toEqual(2);
  });
  test('should return syllable count from line', () => {
    let newVowel = new Haiku('hi');
    let vowelAmount = newVowel.syllableCount(newVowel.line);
    expect(vowelAmount).toEqual(1);
  });
  test('return wow on 5 syllables', () => {
    let wowHaiku = new Haiku('this is a haiku');
    let wowAmount = wowHaiku.lineCount(wowHaiku.line);
    expect(wowAmount).toBe('wow');
  })
  test('return not 5 on 5 syllables', () => {
    let wowHaiku = new Haiku('this is not a haiku');
    let wowAmount = wowHaiku.lineCount(wowHaiku.line);
    expect(wowAmount).toBe('not 5');
  })  
});