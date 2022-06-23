import Haiku from '../src/js/haiku.js';

describe ('Haiku', () => {
  test('should equal line', () => {
    let newHaiku = new Haiku('line');
    expect(newHaiku.line1).toBe('line');
    });
  test('should return syllable count from line', () => {
    let newVowel = new Haiku('hello');
    let vowelAmount = newVowel.syllableCount(newVowel.line1);
    expect(vowelAmount).toEqual(2);
  });
  test('should return syllable count from line', () => {
    let newVowel = new Haiku('hi');
    let vowelAmount = newVowel.syllableCount(newVowel.line1);
    expect(vowelAmount).toEqual(1);
  });
  test('return wow on 5 syllables', () => {
    let wowHaiku = new Haiku('this is a haiku');
    let wowAmount = wowHaiku.lineCount5(wowHaiku.line1);
    expect(wowAmount).toBe(true);
  })
  test('return not 5 on 5 syllables', () => {
    let wowHaiku = new Haiku('this is not a haiku');
    let wowAmount = wowHaiku.lineCount5(wowHaiku.line1);
    expect(wowAmount).toBe(false);
  })  
  test('return wow on 7 syllables', () => {
    let wowHaiku = new Haiku('this is mostly a haiku');
    let wowAmount = wowHaiku.lineCount7(wowHaiku.line1);
    expect(wowAmount).toBe(true);
  })
  test('return not 7 on 7 syllables', () => {
    let wowHaiku = new Haiku('this is not a haiku');
    let wowAmount = wowHaiku.lineCount7(wowHaiku.line1);
    expect(wowAmount).toBe(false);
  })  
});