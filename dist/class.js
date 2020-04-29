"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`hello my name is ${this.name}!! i am ${this.age} years old`);
    }
    incrementAge() {
        this.age += 1;
    }
}
Person.species = 'homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('no subject');
        }
        return 'math';
    }
    set subject(subject) {
        if (!subject) {
            throw new Error('no subject');
        }
        this._subject = subject;
    }
    greeting() {
        console.log(`hello my name is ${this.name}!! i am ${this.age} years old. i teach ${this._subject}`);
    }
}
const teacher = new Teacher('Quill', 38, 'math');
