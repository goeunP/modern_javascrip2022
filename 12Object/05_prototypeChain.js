// Object setPrototypeOf로 객체간 prototype chain 생성하기

// parent
const healthObj = {
  showHealth: function () {
    console.log("오늘 운동시간 :" + this.healthTime);
  },
  setHealth: function (newTime) {
    this.healthTime = newTime;
  },
};

// child obj
const healthChildObj = {
  getAge: function () {
    return this.getAge;
  },
};

const LastHealthObj = Object.setPrototypeOf(healthChildObj, healthObj);
const childObj = Object.setPrototypeOf({ age: 22 }, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();

console.log(childObj); // => {age:22}
