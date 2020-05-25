// 조건문과 간단한 연산자에대한 예시만.

'use strict'

let i = 0;
console.log(i++); //0
i = 0;
console.log(++i); //1
console.log(i=10); //10
console.log(i+=1); //11
console.log(i-=2); //9

console.log(i==10); // false
console.log(i!=10); // true
console.log(i<=10); // true
console.log(i>=10); // false

// 3 = 00000011
// 5 = 00000101
console.log(3 | 5);//2진수로 변환 후 연산을 한다.
console.log(3 & 5);//2진수로 변환 후 연산을 한다.
console.log(!(false));//false면 true, true면 false

if(i == 9){ //트루를 출력 거짓을 출력하려면 9~11번줄중 값 하나를 변경해보면 됨.
  console.log(`########### ${i}는 트루 ############`);
}else{
  console.log(`########### ${i}는 거짓 ############`);
}

switch (i) { //트루를 출력 거짓을 출력하려면 9~11번줄중 값 하나를 변경해보면 됨.
  case 9:
    console.log(`########### swtich문 트루 테스트 ############`);
    break;
  default:
    console.log(`########### swtich문 거짓 테스트 ############`);
    break;
}
