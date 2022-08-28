/*
    1) 기본 객체와 다르게 Map 객체는 키값으로 다양한 자료형을 사용할 수 있습니다.
    2) set(), get(), delete(), keys(), values(), clear() 등 다양한 메서드를 사용할 수 있습니다.
*/

const table = new Map();

table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefiend
console.log(table.get("key")); // 100

const object = { a: 1 };
table.set(object, "A1"); // Map은 Object도 Key로 쓸 수 있다
console.log(table.get(object)); // A1

table.delete(object);
console.log(table.get(object)); // undefined

console.log(table.keys()); // { 'key', 'key2' }
console.log(table.values()); // { 100, 'Hello' }

table.clear();
console.log(table.values()); // { }
