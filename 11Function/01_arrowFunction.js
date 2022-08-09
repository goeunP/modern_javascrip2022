// arrow function 활용

//setTimeout : callback 함수 (나중에 실행되게), 몇 초 후 callback 함수
setTimeout(function () {
  console.log("basic function");
}, 1000);
setTimeout(() => {
  console.log("arrow function");
}, 3000); //arrow function 사용

// 반환값 있을 경우 일반 함수 (map)
let newArr = [1, 2, 3, 4, 5].map(function (value, index, object) {
  return value * 2;
});

console.log(newArr);

// 반환값 있을 경우 arrow function (map)
let newArr2 = [1, 2, 3, 4, 5].map((v) => {
  return v * 3;
});

console.log(newArr2);
