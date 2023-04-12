console.log('Hello Javascript!');

// 한줄 주석
/* 부분 주석 */

//# 변수 선언 방법 //
//* 1. 변수의 타입이 존재하지 않음 
var variable_name;
var variable_name = '변수 값';
console.log(variable_name.trim());
variable_name = 10;
// console.log(variable_name.trim());

//* 2. 변수 선언 키워드 
//*    var, let, const 
var variable_name;
if (10 == 10) {
    var variable_name2 = '변수';
}
console.log(variable_name2);

let let_variable_1;
// let let_variable_1;
if (10 == 10) {
    let let_variable_2 = '블럭 변수';
}
// console.log(let_variable_2);

const const_variable_1 = '상수';
// const_variable_1 = '변경 상수';

//* 3. 데이터의 타입 
//*    문자열 string : '', "" 
let stringVariable1 = '문자열';
let stringVariable2 = "문자열";
console.log(typeof(stringVariable1, stringVariable2));
//*    숫자 number : 정수, 실수 
let numberVariable1 = 10;
let numberVariable2 = 1.5;
console.log(typeof(numberVariable1, numberVariable2));
//*    논리 boolean : true, false 
let booleanVariable = true;
console.log(typeof(booleanVariable));
//*    null 
let nullVariable = null;
console.log(typeof(nullVariable));
//*    배열 : [] 
let arrayVariable = [1, 'A', false];
//*    객체 : {}
let objectVariable = { 
    key: 'value',
    name: 'John',
    age: 20
}