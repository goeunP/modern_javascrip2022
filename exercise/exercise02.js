// Destructuring and Set 활용
// 로또 번호 만들기
// 1. 유일한 값을 추출하는 과정에서 Set 사용
// 2. getRandomNumber함수에 변수를 전달하는 과정에서 destructuring 사용

const SETTING = {
  name: "LUCKY LOTTO",
  count: 6,
  maxNumber: 45,
};

let { count, maxNumber } = SETTING;
let numSet = new Set();

function getRandomNumber(maxNumber) {
  let num = Math.floor(Math.random() * 45 + 1);
  numSet.add(num);
}

for (let i = 0; i < count; i++) {
  getRandomNumber(maxNumber);
}

console.log(numSet);
