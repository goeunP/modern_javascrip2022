function home() {
  const list = ["apple", "orange", "watermelon"];
  // list = "sdsd"; => error : assignment to constant variable.
  list.push("banana"); //=> 오류 없음
  console.log(list);
}
// const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능

//immutable aray (불변성): 원본 배열 수정하지 않고, callback이 존재하는 순회매서드
//에디터에서 글 쓸때 임시저장하고 뒤로가기, 앞으로가기 눌러서 값 되돌리고 싶을 때
//그때그때마다 저장해둔 데이터값 이용해야 함 => immutable array

const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);
console.log(list === list2);
//이런 경우 immutable array 만들어야 함 : 불변의 array

//immutable방식 : concat, spread(...)
