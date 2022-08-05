let obj = {
  name: "crong",
  address: "korea",
  age: 10,
};

let obj2 = {
  name: "goeun",
  address: "korea",
  age: 1,
};

let { name, age } = obj;
console.log(name, age);

let { name: myName, age: myAge } = obj2;
console.log(myName, myAge);
