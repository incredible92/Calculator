var cal = "",
  number,
  decimal,
  equal,
  operator,
  allowSR = true;
var textview = document.forms["myForm"]["textview"];

function insertName(num) {
  if (equal) {
    cal = num;
    textview.value = cal;
    number = true;
    equal = false;
  } else {
    cal = textview.value + num;
    textview.value = cal;
    number = true;
  }
  if (operator) decimal = false;
}

//SR ('a');
