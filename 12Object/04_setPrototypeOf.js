// object setPrototypeOf로 객체만들기
// Object.setPrototypeOf(프로토타입 설정 가지는 객체, 객체의 새로운 프로토 타입);
const healthObj = {
  showHealth: function () {
    console.log("오늘 운동시간 :" + this.healthTime);
  },
  setHealth: function () {
    this.healthTime = newTime;
  },
};

// #1
const myHealth = {
  name: "crong",
  lastTime: "11:20",
};

Object.setPrototypeOf(myHealth, healthObj);

// #2
const newobj = Object.setPrototypeOf(
  {
    name: "crong",
    lastTime: "11:20",
  },
  healthObj
);

console.log("my health is" + myHealth);
console.log(newobj);
