// spread Operator - 몇가지 활용

let pre = [100, 200, "hello", null];

// 1 : 배열에 끼워넣고 싶을때
let newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);

// 2: 개별 파라미터로 값 전달하고 싶을때
let item = [100, 200, 300];
function sum(a, b, c) {
  return a + b + c;
}
// sum(pre[0],pre[1],pre[2]) ===
sum.apply(null, item); //apply : 배열 자체에 적용할 때

// ...사용하면 효율적
console.log("...", sum(...item));
