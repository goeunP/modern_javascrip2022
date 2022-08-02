//ES2015 string 새로운 매서드들

let str = "hello world ! ^^ ~~";
//문자열인지 판단하려면 ? => 정규표현식, matchstr과 비교 ...
let matchstr = "hello";

//~문자열로 시작하는가 ? => startsWith
console.log(str.startsWith(matchstr));

//~문자열로 끝나는가 ? => endsWith
console.log(str.endsWith(matchstr));

//~문자열 포함하는가 ? => includes
console.log("include test", str.includes("world"));
