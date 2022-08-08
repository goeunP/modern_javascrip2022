// weakMap 클래스 인스턴스 변수 보호하기 (weakMap 활용)

function Area(height, width) {
  this.height = height;
  this.width = width;
}

Area.prototype.getArea = function () {
  return this.height * this.width;
};

let myarea = new Area(10, 20);
console.log(myarea.getArea()); // => 200
console.log(myarea.height); // => 10 : 접근 가능

// ====================================================
// weakMap 활용해서 인스턴스 관리해 접근 막기 위한 (garbage collection) 저장소 생성
const wm = new WeakMap();

function Area2(height, width) {
  wm.set(this, { height, width }); // : weakMap에 효율적으로 추가 정보 담아줌
}

Area.prototype.getArea = function () {
  const { height, width } = wm.get(this);
  return height * width;
};

let myarea2 = new Area(10, 20);
console.log(myarea2.getArea()); // => 200
console.log(myarea2.height); // => undefined : 외부에서 접근 불가능

// 장점 : 클래스 자체가 객체에 대한 추가정보 가지고 있지 않음

myarea = null;
console.log(wm.has(myarea));
