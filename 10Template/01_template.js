// template 처리

const data = [
  {
    name: "coffee-bean",
    order: true,
    items: ["americano", "milk", "green-tea"],
  },
  { name: "starbucks", order: false },
];

// json으로 응답 받고, javascript object로 반환한 후에 어떠한 데이터처리 조작을 한 후 dom에 추가
// 데이터 + html 문자열의 결합이 필요하기 때문
// 문자열은 ``로 감싸고 + 데이터는 ${ }로 감싸기
const template = `<div>welcome ${data[0].name} !!`;
console.log(template);
