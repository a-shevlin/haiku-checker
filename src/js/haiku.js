import Poem from './poem.js';

export default class Haiku extends Poem {
  constructor(line) {
    super('haiku');
    //haiku is type 'haiku' for Poem.type
    this.line = line;
  }
  syllableCount(line) {
    let splitLine = line.split(" ");
    let syllableCount = 0;
    splitLine.forEach(function(word) {
      if (word.length <= 3) {
        syllableCount += 1;
        return syllableCount;
      } else {
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/ig, '');
      word = word.replace(/^y/ig, '');
      word = word.match(/[aeiouy]{1,2}/ig).length;
      syllableCount += word;
      return syllableCount;
      }
    });
    return syllableCount;
  }
  lineCount(line) {
    let lineSyllable = this.syllableCount(line);
    if (lineSyllable === 5) {
      return "wow"
    } else {
      return "not 5"
    }
  }
}


  // take hello -> hel lo
  // syllable(line) {
  //   let splitLine = line.split(" ");
  //   //let wordSplit = before single consonant and in between 2
  //   let consonantCount = line.match(/[bcdfghjklmnpqrstvwxz]{1,2}/ig).length;
  //   let syllableCounter = 0;
  //   let newLine = this;
  //   splitLine.forEach(function(word) {
  //     let vowelCount = newLine.vowelCount(word);
  //     if (vowelCount === 1) {
  //       syllableCounter += 1;
  //     } else if (vowelCount > 1 && consonantCount === 1 || noConsonantSplit === 2) {
  //       syllableCounter += vowelCount;
  //     }
  //   });
  //   return syllableCounter;
  // }