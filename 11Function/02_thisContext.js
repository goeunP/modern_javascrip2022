// arrow function의 this context

const myObj = {
  runTimeout() {
    // #1 : basic function
    setTimeout(
      function () {
        // console.log(this === Window); // true : this === window
        this.printData();
      }.bind(this), // this를 bind 해야함 : this.printData is not a function 오류 떠서
      200
    );

    // #2 : arrow function
    // : this가 컨텍스트를 유지하고 있어서 bind 안해도 되는 장점 있음

    setTimeout2(() => {
      // console.log(this === Window); // false : this != window
      this.printData();
    }, 200); // this bind 안해도 됨
  },

  printData() {
    console.log("hi codequad!");
  },
};

myObj.runTimeout();

// #2
const el = document.querySelector("p");
const myObj2 = {
  register() {
    el.addEventListener(
      "click",
      function (evt) {
        this.printData();
      }.bind(this)
    ); // TypeError : this.printData is not a function 발생
    // this binding 하거나 arrow function으로 바꾸기
    el.addEventListener("clicked", (evt) => {
      this.printData(evt.target);
    });
  },

  printData() {
    console.log("cliked");
  },
};

myObj2.register();
