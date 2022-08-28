/*
    1) 키와 값이 동일한 연산을 사용하고 있습니다.
    2) 중복된 내용을 제거할때 사용합니다.
*/

const table = new Set();

table.add("key"); // Key와 Value가 동일하게 들어갑니다.
table.add("key2");
console.log(table.has("key")); // true
console.log(table.has("key3")); // false

table.delete("key2");
console.log(table.has("key2")); // false

table.add("key3");
console.log(table.size); // 2

table.clear();
console.log(table.size); // 0
