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
  constructor(readonly name: string, protected age: number) {}

  greeeeeeeeeting = () => {
    console.log(`hello ${this.name}. I am ${this.age} yaers old`);
  };

  incrementAge = () => {
    this.age += 1;
  };
}

class Teacher extends Ningen {
  get subject() {
    if (!this._subjet) {
      throw new Error('there is no subject');
    }
    return 'music';
  }

  set subject(subject) {
    this._subjet = subject;
  }

  constructor(name: string, age: number, private _subjet: string) {
    super(name, age);
  }
}

const bob = new Teacher('bob', 38, 'math');
console.log(bob.subject);
