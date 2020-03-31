"use strict";
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banaba: b,
};
let hasValue = true;
let count = 1;
let float = 3.14;
let negative = -1;
let string = '';
const person = {
    name: {
        first: 'jack',
        last: 'bob',
    },
    age: 21,
};
//array
const fruits = ['appple', 'banana', 'grape', 1];
//taple
const book = ['business', 1500, false];
//enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    bot: true,
    size: CoffeeSize.TALL,
};
//any
let anything = true;
anything = 'hello';
anything = [12];
//uniom
let unionType = 10;
let unionTypes = [21, 'hello'];
// literal
const apple = 'apple';
const clothSize = 'S';
// function
const add = (a, b) => {
    return a + b;
};
const sayHello = () => {
    console.log('hello');
};
console.log(sayHello());
const anotherAdd = add;
const doubleNumber = num => num * 2;
const doubleHandle = (num, cb) => {
    const doubleNum = cb(num * 2);
    doubleNum.toExponential();
    console.log(num);
};
doubleHandle(21, dubleNum => {
    return dubleNum;
});
// unknow
let unKnowInput;
let anyInput;
unKnowInput = 'aaa';
unKnowInput = 21;
unKnowInput = true;
//never
const error = (message) => {
    throw new Error(message);
};
console.log('this is an error');
