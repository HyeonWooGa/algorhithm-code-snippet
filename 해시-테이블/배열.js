/*
    - 자바스크립트의 배열은 객체형 이기때문에 해쉬테이블로 사용할 수 있습니다.
    - 다만, 제대로된 사용법이 아니므로 추천하지 않습니다. 
*/

const table = [];

table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); // 100

table["key"] = 349;
console.log(table["key"]); // 349

delete table["key"];
console.log(table["key"]); // undefined
