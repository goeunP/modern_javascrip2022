var name = "global var"; //전역변수

function home() {
  var homevar = "homevar"; //지역변수
  for (var i = 0; i < 100; i++) {}
  console.log(i);

  if (true) {
    let myif = "myif";
  }
  // console.log(myif); => myif is not defined
}

// console.log(i); => for문 벗어나서 실행하면 오류

home(); //100
