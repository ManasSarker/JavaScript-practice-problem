function arrayNums(nums) {
  var evenNumbers = [];

  var oddNumbers = [];

  for (i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (num % 2 == 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }
  return evenNumbers;
}

var values = [1, 12, 32, 15, 45];
var allNum = arrayNums(values);

console.log(allNum);
