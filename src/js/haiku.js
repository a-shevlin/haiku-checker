import Poem from './poem.js';

export default class Haiku extends Poem {
  constructor(line1, line2, line3) {
    super('haiku');
    //haiku is type 'haiku' for Poem.type
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
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
  lineCount5(line) {
    let lineSyllable = this.syllableCount(line);
    if (lineSyllable === 5) {
      return true;
    } else {
      return false;
    }
  }
  lineCount7(line) {
    let lineSyllable = this.syllableCount(line);
    if (lineSyllable === 7) {
      return true;
    } else {
      return false;
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