class Human {
  static species = 'Homo Sapience';
  static isAdult = (age: number) => {
    if (age >= 18) return true;
    return false;
  };
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
  get carKind() {
    return 'prius';
  }

  set carKind(value) {
    this.carKind = value;
  }

  constructor(name: string, age: number, private _carKind: string) {
    super(name, age);
  }

  greeting = () => {
    console.log(
      `Hello! my name is ${this.name}!! i am ${this.age} years old. i drived ${this._carKind}`,
    );
  };
}

const dirver = new Driver('quill', 38, 'prius');
dirver.greeting();
