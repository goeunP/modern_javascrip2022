// map & weakMap
// js 자료 처리 방식 : array -> set, weakSet | object -> map, weakMap

// map 은 key & value 구조

let wm = new WeakMap();
let myfun = function () {};
// 이 함수가 얼마나 실행됐지? 를 알려고 할 때 -> 참조로 들어가 있는 func의 count 세야함

wm.set(myfun, 0);
console.log(wm);
// 결과 : WeakMap {f  => 0}

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myfun); // get value
  count++;
  wm.set(myfun, count);
}

console.log(wm);
console.log(wm.get(myfun)); // 10
// 결과 : WeakMap {f  => 10}

myfun = null;
console.log(wm.get(myfun));
// 결과 : undefined ;
