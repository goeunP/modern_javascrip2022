// rest parameters
// ...은 요소를 하나씩 모두 전개시킬 때는 spread, 나머지 요소를 묵을 때는 rest 역할
// 매개변수에 ...이 들어가면 rest parameter로 각 요소들을 배열로 만드는 역할 함

function checkNum(...argArray) {
  // ES5 이전
  // const argArray = Array.prototype.slice.call(arguments);
  // Array에서 자르는 함수를 arguments 컨텍스트에서 실행해라

  console.log(toString.call(argArray)); // => object Array
  const result = argArray.every((v) => typeof v === "number"); // 모든 값이 참일 경우만 true
  console.log(result); // false
}

// 인자가 여러개가 있을 때
const result = checkNum(10, 2, 3, 4, 5, "55");
