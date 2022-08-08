// weakset : 참조 가지고 있는 객체만 저장 가능
// 객체형태를 중복 없이 저장해서 자료구조 다루려고 할 때 유용함

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();

ws.add(arr); //=> 오류 없음
ws.add(111); //=> uncaught typeError : Invalid value used in weak set
ws.add("111"); //=> uncaught typeError : Invalid value used in weak set
ws.add(null); //=> uncaught typeError : Invalid value used in weak set
ws.add(function () {}); //=> 오류 없음 : 참조 가지고 있는 객체라서

console.log(ws);

arr = null;
console.log(ws.has(arr), ws.has(arr2));
// => false true  : arr값이 null로 변해서 ws는 arr 참조 잃은 상태로 인식
