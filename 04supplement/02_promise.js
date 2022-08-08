// 1. promise 객체 : 비동기 처리 하기 위한 방식 : .then(...) 형태

// promise 성공시 resolve, 실패시 reject 함수 호출
// 1초뒤 성공하는 상황
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then((n) => {
  console.log(n);
});
