// object assign으로 js객체 만들기

// new 키워드로 class 만들지 말고 순수하게 object 만들기 위해
const healthobj = {
  showHealth: function () {
    console.log("오늘운동시간 : " + this.healthTime);
  },
};

// 1. object create로 만드는 방식
const myHealth = Object.create(healthobj);

// 객체 속성 지정하기
myHealth.healthTime = "11:20";
myHealth.name = "crong";

console.log(myHealth);
// => Object{healthTime: "11:20", name:"crong"}
// healthTime : "11:20"
// name : "crong"
//__proto__: Object
// showHealth: function()

// ============================================
// 2. object assign 사용 방식
const myHealth2 = Object.assign(Object.create(healthobj), {
  name: "crong",
  healthTime: "11:20",
});

console.log(myHealth2);
// => Object{healthTime: "11:20", name:"crong"}
// healthTime : "11:20"
// name : "crong"
//__proto__: Object
// showHealth: function()
