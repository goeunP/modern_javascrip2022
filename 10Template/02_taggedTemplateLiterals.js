// tagged template literals
// : 함수에서 처리후 결과값 template으로 반환해서 사용

const data = [
  {
    name: "coffee-bean",
    order: true,
    items: ["americano", "milk", "green-tea"],
  },
  { name: "starbucks", order: false },
  { name: "hollys", order: true, items: ["latte", "choco"] },
];

// tagged template literals
function fn(tags, name, items) {
  // console.log("tags:", tags, "name :", name, "items:\n", items);
  // tags: [ '<div>welcome ', ' !!</div>\n    <h2>주문가능항목</h2> <div>', '</div>' ] => 전체 배열
  // name : starbucks
  // items: [ 'americano', 'milk', 'green-tea' ]
  if (typeof items === "undefined") {
    items = "주문가능한 상품이 없습니다";
  }
  return tags[0] + name + tags[1] + items + tags[2];
}

const template = fn`<div>welcome ${data[1].name} !!</div>
    <h2>주문가능항목</h2> <div>${data[1].items}</div>`;
//tmeplate 언어를 fn 함수로 감싸줌

// console.log(template);

data.forEach((v) => {
  let template2 = fn`<div>welcome ${v.name} !!</div>
    <h2>주문가능항목</h2> <div>${v.items}</div>`;

  console.log(template2);
});
