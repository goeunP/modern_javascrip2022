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
    setTimeout2(() => {
      this.printData();
    }, 200); // this bind 안해도 됨
  },

  printData() {
    console.log("hi codequad!");
  },
};

myObj.runTimeout();
