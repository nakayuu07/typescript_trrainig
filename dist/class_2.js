"use strict";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.incrementAge = () => {
            this.age += 1;
        };
        this.greeting = () => {
            console.log(`Hello! my name is ${this.name}!! i am ${this.age} years old`);
        };
    }
}
const david = new Human('david', 38);
david.greeting();
class Driver extends Human {
    constructor(name, age, carKind) {
        super(name, age);
        this.carKind = carKind;
        this.greeting = () => {
            console.log(`Hello! my name is ${this.name}!! i am ${this.age} years old. i drived ${this.carKind}`);
        };
    }
}
const dirver = new Driver('quill', 38, 'prius');
dirver.greeting();
