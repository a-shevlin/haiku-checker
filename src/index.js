import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './js/haiku.js';

//'this is a haiku' = #textInput
let lineInput1 = $('#textInput').val();
let lineInput2 = $('#textInput').val();
let lineInput3 = $('#textInput').val();
let newHaiku = new Haiku(lineInput1, lineInput2, lineInput3);
let passLine1 = newHaiku.lineCount5(newHaiku.line1);
if (passLine1 = true) {
  $(".haiku").append(newHaiku.line1);
} else {
  $(".haiku").text('this line does not fit haiku 5-7-5');
}
let passLine2 = newHaiku.lineCount7(newHaiku.line2);
if (passLine2 = true) {
  $(".haiku").append(newHaiku.line2);
} else {
  $(".haiku").text('this line does not fit haiku 5-7-5');
}
let passLine3 = newHaiku.lineCount5(newHaiku.line3);
if (passLine3 = true) {
  $(".haiku").append(newHaiku.line3);
} else {
  $(".haiku").text('this line does not fit haiku 5-7-5');
}
console.log(passLine);
//true