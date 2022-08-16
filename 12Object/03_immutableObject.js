// object assign으로 immutable 객체 만들기

const previousObj = {
  name: "crong",
  lastTime: "11:20",
};

//previousObj의 모든 값을 추출한 후 그 중 새로운 값이 있으면 대체하고 추가해 빈{}에 할당
// 바뀌는 값이 없다고 하더라도 previousObj와 myHealth는 다른 것
const myHealth = Object.assign({}, previousObj, { lastTime: "12:30" });

console.log("myhealth is" + myHealth);
// => myhealth is Object {name: "crong", lastTime: "12:30"}
