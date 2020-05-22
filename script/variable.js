/*
ES5에서 소개된 엄격모드로,
과거 암무적으로 비엄격 모드를 해제하는데 사용한다.

비엄격 모드에 대표적으로는 코드 오류가 발생해도 무시하고 실행을 시키는 부분이 있다.
*/
'use strict';
/*
자바스크립트에는 여러가지 변수 선언 방법이 있다.
var val 이 대표적이라고 생각을 하지만
ES6 이후에는 이 두개는 사용하지 않는다.

왜냐하면 선언 순서를 무시하기때문이다.
그래서 ES6 이후에는 let 과 const 이 두가지만 사용을 한다.
*/
let text = "let 형";
console.log(text);
text = "let"
console.log(text);
const field = "const 형";
console.log(field);

/*
let 형은 값의 변환이 가능하지만
const 형은 값의 변환이 불가능 하다.
그럼 const 는 언제 쓰이는가?
 - 보안
 - 값의 변화가 필요 없을 때 (ex - 라이브러리 호출)




변수를 선언함과 동시에 데이터형이 자동으로 설정된다.


*/
let title = " Title ";
console.log(`데이터형 : ${typeof title}`);
title = 123;
console.log(`데이터형 : ${typeof title}`);
title = [123,123];
console.log(`데이터형 : ${typeof title}`);
