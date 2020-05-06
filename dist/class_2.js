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
Human.species = 'Homo Sapience';
Human.isAdult = (age) => {
    if (age >= 18)
        return true;
    return false;
};
const david = new Human('david', 38);
david.greeting();
class Driver extends Human {
    constructor(name, age, _carKind) {
        super(name, age);
        this._carKind = _carKind;
        this.greeting = () => {
            console.log(`Hello! my name is ${this.name}!! i am ${this.age} years old. i drived ${this._carKind}`);
        };
    }
    get carKind() {
        return 'prius';
    }
    set carKind(value) {
        this.carKind = value;
    }
}
const dirver = new Driver('quill', 38, 'prius');
dirver.greeting();
