import Poem from './poem.js';

export default class Haiku extends Poem {
  constructor(line) {
    super('haiku');
    this.line = line;
  }    
}