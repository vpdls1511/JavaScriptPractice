'use strict'

let obj = {
  name : "nGyu",
  blog : "ngyu.tistory.com",
  stack : {// 이런식으로 중첩이 가능하다.
    front : "html / css",
    back : "express.js"
  },
  site : {
    width : 1920,
    height : 1080
  }
};

console.log("obj");
console.log(obj);

console.log("obj.stack");
console.log(obj.stack);

console.log("obj.stack.front");
console.log(obj.stack.front);

console.log("obj.stack.back");
console.log(obj.stack.back);
