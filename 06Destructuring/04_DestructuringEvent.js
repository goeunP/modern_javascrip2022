// Destructuring 활용 Event 객체 전달

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

//함수 파라미터에도 destructuring 사용가능
function getNewsList([{ newslist }]) {
  console.log(newslist);
}

getNewsList(news);
