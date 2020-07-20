// type addFunc = (num: number) => number;
// let addFunc = (num: number) => num;

// interface addFunc2 {
//   (num: number, num2: number): number;
// }

// interface Nameable {
//   name: string;
//   nickName?: string;
// }

// interface Person extends Nameable {
//   age: number;
//   greeting(message: string): void;
// }

// class Developer implements Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public experience: number,
//   ) {}
//   greeting(message: string) {
//     console.log(message);
//   }
// }

// const user = new Developer('quil', 38, 3);

interface Hito {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human: Hito = {
  name: 'tanaka',
  age: 38,
  greeting: (message: string) => {
    console.log(message);
  },
};

class Dev implements Hito {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
  ) {}
  greeting(message: string) {
    console.log(message);
  }
}

const hello = (message?: string) => {
  return message;
};
