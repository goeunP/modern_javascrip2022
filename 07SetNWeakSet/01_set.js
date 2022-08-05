// Set으로 유니크한 배열 만들기
// Set 자료구조 : new 키워드로 생성하고 중복 없이 유일한 값을 저장
// => 이미 존재하는지 체크할 때 유용

let mySet = new Set();
console.log(toString.call(mySet));
//=> object Set

// #1 : add
mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

mySet.forEach(function (v) {
  console.log(v);
});
// => crong hary만 출력 ; 중복된 값은 add 되지 않음

// #2 : has
console.log(mySet.has("crong")); //=> true

// #3 : delete
mySet.delete("crong");
mySet.forEach(function (v) {
  console.log(v);
});
// => hary
