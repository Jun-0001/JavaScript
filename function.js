// 함수 (Function)
// -> 코드 재사용하기 위해 만든 구조

// 함수 선언 정의 -> "~기능을 하는 코드 덩어리를 X라는 이름으로 부르겠다"
// 함수 호출 (call) -> 함수를 사용한다
// 입력 -> 함수 동작 -> 출력
function add(n1, n2) {
    let result = n1 + n2;

    // 함수 호출한 곳으로 함수의 실행 결과를 돌려줌
    
    // return result; -> return undefined;
    //return result; 
    console.log(result)
}

// 함수 호출(call) -> 함수 사용
// let result = add(1,2);
// console.log(result);
let return_value = add(1,2);
console.log(return_value)