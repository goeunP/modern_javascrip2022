// proxy로 interception 기능 구현
// proxy : 어떤 object가 있을 때 그 object를 가로채서 다른 작업을 추가로 할 수 있는 일 제공해줌
// const proxy=new Proxy(타겟, 핸들러)

const myObj = { name: "crong" };
const proxy = new Proxy(myObj, {
  get: function (target, property, receiver) {
    console.log("get value");
    return target[property];
  },
  set: function (target, property, value) {
    console.log("set value");
    target["changedValue"]++;
    target[property] = value;
  },
});

console.log(proxy.name); //=>'crong'
proxy.name = "jisu";
console.log(proxy.name); //=>'jisu'
proxy.name = "asdf";
console.log(proxy); //=> {name: 'asdf', changedValue : 2}
