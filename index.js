var a = 1 + 2;
var b = a + 3;
var c = {
    apple: a,
    banaba: b
};
var hasValue = true;
var count = 1;
var float = 3.14;
var negative = -1;
var string = '';
var person = {
    name: {
        first: 'jack',
        last: 'bob'
    },
    age: 21
};
//array
var fruits = ['appple', 'banana', 'grape', 1];
//taple
var book = ['business', 1500, false];
//enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    bot: true,
    size: CoffeeSize.TALL
};
//any
var anything = true;
anything = 'hello';
anything = [12];
//uniom
var unionType = 10;
var unionTypes = [21, 'hello'];
// literal
var apple = 'apple';
var clothSize = 'S';
// function
var add = function (a, b) {
    return a + b;
};
var sayHello = function () {
    console.log('hello');
};
console.log(sayHello());
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
var doubleHandle = function (num, cb) {
    var doubleNum = cb(num * 2);
    doubleNum.toExponential();
    console.log(num);
};
doubleHandle(21, function (dubleNum) {
    return dubleNum;
});
// unknow
var unKnowInput;
var anyInput;
unKnowInput = 'aaa';
unKnowInput = 21;
unKnowInput = true;
//never
var error = function (message) {
    throw new Error(message);
};
console.log('this is an error');
