// rest parameters

function checkNum(...argArray) {
  const argArray = Array.prototype.slice.call(arguments);
  // Array에서 자르는 함수를 arguments 컨텍스트에서 실행해라
  console.log(toString.call(argArray)); // => object Arguments
  const result = argArray.every((v) => typeof v === "number"); // 모든 값이 참일 경우만 true
  console.log(result); // false
}

// 인자가 여러개가 있을 때
const result = checkNum(10, 2, 3, 4, 5, "55");
