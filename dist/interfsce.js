"use strict";
let addFunc = (num) => num;
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const user = new Developer('quil', 38, 3);
