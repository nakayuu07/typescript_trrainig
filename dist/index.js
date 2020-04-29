"use strict";
// let a = 1 + 2;
// let b = a + 3;
// let c = {
//   apple: a,
//   banaba: b,
// };
// let hasValue: boolean = true;
// let count: number = 1;
// let float: number = 3.14;
// let negative: number = -1;
// let string: string = '';
// const person = {
//   name: {
//     first: 'jack',
//     last: 'bob',
//   },
//   age: 21,
// };
// //array
// const fruits = ['appple', 'banana', 'grape', 1];
// //taple
// const book: [string, number, boolean] = ['business', 1500, false];
// //enum
// enum CoffeeSize {
//   SHORT,
//   TALL,
// }
// const coffee = {
//   bot: true,
//   size: CoffeeSize.TALL,
// };
// //any
// let anything: any = true;
// anything = 'hello';
// anything = [12];
// //uniom
// let unionType: number | string = 10;
// let unionTypes: (number | string)[] = [21, 'hello'];
// // literal
// const apple = 'apple';
// type ClothSize = 'S' | 'M' | 'L'; //type alias
// const clothSize: ClothSize = 'S';
// // function
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// const sayHello = (): void => {
//   console.log('hello');
// };
// console.log(sayHello());
// const anotherAdd = add;
// const doubleNumber: (num: number) => number = (num) => num * 2;
// const doubleHandle = (num: number, cb: (num: number) => number): void => {
//   const doubleNum = cb(num * 2);
//   doubleNum.toExponential();
//   console.log(num);
// };
// doubleHandle(21, (dubleNum) => {
//   return dubleNum;
// });
// // unknow
// let unKnowInput: unknown;
// let anyInput: any;
// unKnowInput = 'aaa';
// unKnowInput = 21;
// unKnowInput = true;
// //never
// const error = (message: string): never => {
//   throw new Error(message);
// };
// console.log('this is an error');
let hasValue = true;
let count = 1;
let floar = -1.0;
let single = 'hello';
const person = {
    name: 'string',
    age: 21,
};
const fruits = ['aaa', 'aaaa', 'aaaa'];
const book = ['aaa', 1, true];
var Size;
(function (Size) {
    Size["SHORT"] = "SHORT";
    Size["TALL"] = "TALL";
    Size["GRANDE"] = "GRANDE";
})(Size || (Size = {}));
const a = 'a';
let unionType = 10;
const clothSize = 'large';
const add = (num1, num2) => {
    return num1 + num2;
};
add(1, 2);
const sayHello = () => {
    console.log('hello');
};
const anotherAdd = add;
const doubleNum = (num, cb) => {
    console.log(cb(num));
};
const doubleHandle = (num) => {
    return num * 2;
};
console.log(doubleNum(2, doubleHandle));
let unknowInput;
let anyInput;
const error = (message) => {
    throw new Error(message);
};
let ddd = false;
