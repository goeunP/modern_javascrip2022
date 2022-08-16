export default function log(data) {
  console.log(data);
}

export const getData = () => {
  return Data.now();
};

export const getCurrentHour = () => {
  return new Data().getHours();
};

export const _ = {
  log(data) {
    if (window.console) console.log(data);
  },
};

// Class

export class MyLogger {
  constructor(props) {
    this.lectures = ["java", "ios"];
  }
  getLectures() {
    return this.lectures;
  }
  getTime() {
    return Data.now();
  }
}
