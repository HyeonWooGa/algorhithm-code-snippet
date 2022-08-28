/*
    - 자바스크립트에서 해시 테이블을 구현하는 가장 쉬운 방법입니다.
*/

const table = {};

table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); // 100

table["key"] = 349;
console.log(table["key"]); // 349

delete table["key"];
console.log(table["key"]); // undefined
