// 자바스크립트에서의 반복문
'use strict'

console.log("");
console.log("###################### for ###################");
console.log("");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("");
console.log("###################### for 중첩 ###################");
console.log("");
for(let i = 1 ; i < 5 ; i ++){
  for(let j = 1 ; j < 5 ; j ++){
    console.log(`i:${i} - j:${j}`);
  }
}

// for 무한루프
/*
 for(;;){
    console.log('돌려돌려~');
  }
*/

console.log("");
console.log("###################### while ###################");
console.log("");
let i = 0;
while (i<10) {
  console.log("while "+i);
  i++
}

//while 무한루프
/*
while (true) {
  console.log("돌려돌려!");
}
*/
