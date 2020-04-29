class Human {
  constructor(readonly name: string, protected age: number) {}

  incrementAge = () => {
    this.age += 1;
  };

  greeting = () => {
    console.log(`Hello! my name is ${this.name}!! i am ${this.age} years old`);
  };
}
const david = new Human('david', 38);
david.greeting();

class Driver extends Human {
  constructor(name: string, age: number, public carKind: string) {
    super(name, age);
  }

  greeting = () => {
    console.log(
      `Hello! my name is ${this.name}!! i am ${this.age} years old. i drived ${this.carKind}`,
    );
  };
}

const dirver = new Driver('quill', 38, 'prius');
dirver.greeting();
