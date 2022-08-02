//for of - 순회하기(iterate)

var data = [1, 2, undefined, NaN, null, ""];

// #1 : for 문
for (var i = 0; i < data.length; i++) {
  console.log("for", i); // => 012345
}

// #2 : forEach 문 : 객체 기본 내장함수
//배열명.forEach(function(요소명){실행문(요소명)}));

data.forEach(function (value) {
  console.log("forEach", value); // => 1  2 undefined NaN null
});

// #3 : for in
for (let idx in data) {
  console.log(data[idx]); // => 1  2 undefined NaN null
}

// for in 사용시 자기가 갖고 있지 않은 상위 값(프로토타입 값)까지 포함해 출력할때도 있음
// array에서 for in 자주 사용하지 않음

// #4 : for of (배열뿐 아닌 문자열 순회도 가능)
for (let item of data) {
  console.log(item); // => 1  2 undefined NaN null
}
