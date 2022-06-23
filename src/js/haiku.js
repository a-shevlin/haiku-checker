import Poem from './poem.js';

export default class Haiku extends Poem {
  constructor(line) {
    super('haiku');
    //haiku is type 'haiku' for Poem.type
    this.line = line;
  }
  vowelCount(line) {
    let vowelCount = line.match(/[aeiouy]{1,2}/ig).length;
    return vowelCount;
  }    
}


