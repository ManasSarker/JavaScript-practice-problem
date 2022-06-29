function callBack(name, age, task) {
  console.log("The name is " + name);

  console.log("This is your age" + age);

  task();
}

function takeShower() {
  console.log("Please take shower");
}

function readPlease() {
  console.log("please read daily");
}

callBack("manas", 25, takeShower);

callBack("sazzad", 23, readPlease);
