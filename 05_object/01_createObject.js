// 간단히 객체 생성하기

function getObj() {
  const name = "crong";

  const getName = function () {
    return name;
  };

  const setName = function (newname) {
    name = newname;
  };

  const printName = function () {
    console.log(name);
  };
  return {
    getName: getName,
    setName: setName,
  };
}
var obj = getObj();
console.log(obj);
console.log(obj.getName());
