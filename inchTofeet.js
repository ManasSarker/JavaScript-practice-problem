/* Inch to feet solve by array */

function inchTofeet(inch) {
  var result = inch / 12;

  return result;
}

var age = [12, 24, 26, 48];

for (i = 0; age.length > i; i++) {
  var final = inchTofeet(age[i]);

  console.log(final);
}
