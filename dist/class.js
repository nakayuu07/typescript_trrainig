"use strict";
// class Person {
//   static species = 'homo sapiens';
//   constructor(public readonly name: string, protected age: number) {}
//   greeting(this: Person) {
//     console.log(`hello my name is ${this.name}!! i am ${this.age} years old`);
//   }
//   incrementAge() {
//     this.age += 1;
//   }
// }
// class Teacher extends Person {
//   constructor(name: string, age: number, private _subject: string) {
//     super(name, age);
//   }
//   get subject() {
//     if (!this._subject) {
//       throw new Error('no subject');
//     }
//     return 'math';
//   }
//   set subject(subject) {
//     if (!subject) {
//       throw new Error('no subject');
//     }
//     this._subject = subject;
//   }
//   greeting() {
//     console.log(
//       `hello my name is ${this.name}!! i am ${this.age} years old. i teach ${this._subject}`,
//     );
//   }
// }
// const teacher = new Teacher('Quill', 38, 'math');
class Ningen {
    constructor(initName) {
        this.greeeeeeeeeting = () => {
            console.log(`hello ${this.name}`);
        };
        this.name = initName;
    }
}
const abc = new Ningen('quill');
console.log(abc.greeeeeeeeeting());
