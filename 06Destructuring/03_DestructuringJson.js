// Destructuring을 활용해 JSON 파싱

//JSON
var news = [
  {
    title: "sbs",
    newslist: ["1", "2", "3"],
  },
  {
    title: "mbc",
    newslist: ["11", "21", "31"],
  },
];

let [, mbc] = news;
console.log(mbc);

let { title: mbcTitle } = mbc;
console.log(mbcTitle);

//간략화
let [, { title, newslist }] = news;
console.log(newslist);
