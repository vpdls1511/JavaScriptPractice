/*
JavaScript 에서 배열을 사용하는 방법은 아래와 같다.
*/

let number = [1,2,3,4];
//이런식으로 선언을 해 준다.

console.log(number.length);
//length 를 이용하면 number배열의 크기릉 알 수 있다.

//위에서 알아낸 크기를 이용하여 배열의 인덱스에 접근을 할 수 있다.
let first = number[0];
let last = number[number.legth - 1];

//배열에 맨 끝 부분에 값 추가하기
number.push(5);
//[1,2,3,4,5]
//배열 앞 부분에 값 추가하기
number.unshift(0);


//배열 값 삭제하기
//앞
number.shift()
//뒤
number.pop()

//splice(k,n) k 인덱스 부터 n개 삭제
number.splice(3,1)
//3번인덱스부터 1개삭제
