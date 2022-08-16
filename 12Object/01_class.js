//class를 통한 객체 생성

// 객체를 prototype안에 두고 객체를 generate 하는 방식
// new 키워드는 생성자 함수에서 객체 생성하는데 사용, 개 개체 만들고, 객체의 프로토타입을 생성자 함수의 프로토타입 속성으로 설정
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function () {
  console.log(this.name + "님 안녕하세요");
};

// new 키워드 붙이면 this라는 컨텍스트에 여러 프로토타입 하위에 있는 메소드, 속성들, this. 등을 묶어서 객체 만들어서 h로 할당
// h가 객체가 됨
const h = new Health("crong");
h.showHealth(); // => crong님 안녕하세요

// =================================================
//ES6 Class : constructor 있음/ 사실은 function임.
class Health2 {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }
  showHealth2() {
    console.log("안녕하세요" + this.name);
  }
}

const myHealth = new Health2("crong");
myHealth.showHealth2();

console.log(toString.call(Health)); //=> [object Function]
console.log(toString.call(Health2)); //=> [object Function]
