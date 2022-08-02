// from 메서드로 진짜 배열 만들기

function addMark() {
  let newData = [];
  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }

  // map 함수 사용
  //argument : {'0':1, '1':2, '2':3 ...} => 가짜 배열
  // argument를 진짜 배열로 바꾸기 위해 from 사용
  let newArray = Array.from(arguments); // arguments로부터 배열을 만들어 newArray에 할당
  let mapData = arguments.map(function (value) {
    return value + "!";
  });

  console.log(newData);
  console.log("map", mapData); //=> error : arguments.map is not a function
}

addMark(1, 2, 3, 4, 5);
