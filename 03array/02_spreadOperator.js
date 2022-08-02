// spread operator(펼침 연산자) - 배열의 복사

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData); // 복사한 값이라 내용은 같음
console.log(pre === newData); //false : 둘은 참조가 다른 데이터
