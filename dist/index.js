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
// // //array
// // const fruits = ['appple', 'banana', 'grape', 1];
// // //taple
// // const book: [string, number, boolean] = ['business', 1500, false];
// // //enum
// // enum CoffeeSize {
// //   SHORT,
// //   TALL,
// // }
// // const coffee = {
// //   bot: true,
// //   size: CoffeeSize.TALL,
// // };
// // //any
// // let anything: any = true;
// // anything = 'hello';
// // anything = [12];
// // //uniom
// // let unionType: number | string = 10;
// // let unionTypes: (number | string)[] = [21, 'hello'];
// // // literal
// // const apple = 'apple';
// // type ClothSize = 'S' | 'M' | 'L'; //type alias
// // const clothSize: ClothSize = 'S';
// // // function
// // const add = (a: number, b: number): number => {
// //   return a + b;
// // };
// // const sayHello = (): void => {
// //   console.log('hello');
// // };
// // console.log(sayHello());
// // const anotherAdd = add;
// // const doubleNumber: (num: number) => number = (num) => num * 2;
// // const doubleHandle = (num: number, cb: (num: number) => number): void => {
// //   const doubleNum = cb(num * 2);
// //   doubleNum.toExponential();
// //   console.log(num);
// // };
// // doubleHandle(21, (dubleNum) => {
// //   return dubleNum;
// // });
// // // unknow
// // let unKnowInput: unknown;
// // let anyInput: any;
// // unKnowInput = 'aaa';
// // unKnowInput = 21;
// // unKnowInput = true;
// // //never
// // const error = (message: string): never => {
// //   throw new Error(message);
// // };
// // console.log('this is an error');
// let hasValue: boolean = true;
// let count: number = 1;
// let floar: number = -1.0;
// let single: string = 'hello';
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'string',
//   age: 21,
// };
// const fruits: (string | number)[] = ['aaa', 'aaaa', 'aaaa'];
// const book: [string, number, boolean] = ['aaa', 1, true];
// enum Size {
//   SHORT = 'SHORT',
//   TALL = 'TALL',
//   GRANDE = 'GRANDE',
// }
// const a = 'a';
// let unionType: number | string = 10;
// type ClothSize = 'small' | 'midium' | 'large';
// const clothSize: ClothSize = 'large';
// const add = (num1: number, num2: number) => {
//   return num1 + num2;
// };
// add(1, 2);
// const sayHello = (): void => {
//   console.log('hello');
// };
// const anotherAdd: (n1: number, n2: number) => number = add;
// const doubleNum = (num: number, cb: (num: number) => number): void => {
//   console.log(cb(num));
// };
// const doubleHandle = (num: number): number => {
//   return num * 2;
// };
// console.log(doubleNum(2, doubleHandle));
// let unknowInput: unknown;
// let anyInput: any;
// const error = (message: string) => {
//   throw new Error(message);
// };
// let ddd: boolean = false;
// const c = {
//   name: 'aaa',
// };
// let userA: {
//   readonly firstName: string;
// } = {
//   firstName: 'aaa',
// };
// userA.firstName;
// type Ningen = {
//   name: string;
//   age: number;
// };
const awe = 1;
let fjg = awe;
let plus = (num1, num2) => {
    let sum = num1 + num2;
    if (sum > 3) {
        return `${sum}`;
    }
    return sum;
};
let array = [1, '2'];
// type CoffeeSize = 'TALL' | 'SHORT' | 'GRANDE';
// let buyCoffee: {
//   price: number;
//   coffeeSize: CoffeeSize;
// } = {
//   price: 1000,
//   coffeeSize: 'SHORT',
// };
// interface User {
//   name?: {
//     first: string;
//     last: string;
//   };
//   age: number;
// }
// let user10: User = {
//   age: 18,
// };
// user10.name?.first;
// interface Props {
//   id: number;
// }
// let aaaa = 2.33;
let hasValue = true;
let count = 1;
let single = 'Hello';
const person = {
    name: {
        firstName: 'jack',
        lastName: 'smith',
    },
    age: 21,
};
const fruits = ['banana', 'meron', 'grape'];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTY";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
let unionType = 1;
let unionTypes = [1, 2];
const apple = 'apple';
const add = (num, num2) => {
    return num + num2;
};
const sayHello = () => {
    console.log('Hello');
};
const anotherAdd = add;
let unKnowInput;
let anyInput;
let text;
