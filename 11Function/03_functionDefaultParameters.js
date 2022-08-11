// default parameters

function sum(value, size = 1) {
  // size defulat를 1로 지정
  return value * size;
}

console.log(sum(3)); // 3
console.log(sum(3, 10)); //30

function sum2(value, size = { value: 1 }) {
  return value * size.value;
}

console.log(sum2(3)); // 3
console.log(sum2(3, { value: 3 })); //9
