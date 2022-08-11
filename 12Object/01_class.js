//class를 통한 객체 생성

// 원래 자바스크립트는 class가 없는데
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function () {
  console.log(this.name + "님 안녕하세요");
};

const h = new Health("crong");
h.showHealth(); // => crong님 안녕하세요
