var list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  //var로 선언할 경우 값이 변하지 않음
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.");
  });
  // callback이 가지고 있는 i값은 callback 밖의 변수 값을 참조하면서 function이 변수를 기억함
  // i값은 클로저 변수 : 함수와 함수가 선언된 렉시컬 환경과의 조합
}
