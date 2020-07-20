// type Engineer = {
//   name: string;
//   role: string;
// };

// type Blogger = {
//   name: string;
//   follower: number;
// };

// type EngineerBlogger = Engineer & Blogger;
// const quill: EngineerBlogger = {
//   name: 'quill',
//   role: 'front-end',
//   follower: 1000,
// };

// // function toUpperCase(x: string): string;
// // function toUpperCase(x: number): number;
// // function toUpperCase(x: string | number): string | number {
// //   if (typeof x === 'string') {
// //     return x.toLocaleLowerCase;
// //   }
// //   return x;
// // }

// type NomadWorker = Engineer | Blogger;
// const describeNomadWorkerProfile = (nomadWorker: NomadWorker) => {
//   console.log(nomadWorker.name);
//   if ('role' in nomadWorker) {
//     nomadWorker.role;
//   }
//   if ('follower' in nomadWorker) {
//     console.log(nomadWorker.follower);
//   }
// };

// class Dog {
//   speak = () => {
//     console.log('bow-bow');
//   };
// }

// class Bird {
//   speak = () => {
//     console.log('tyun-tyun');
//   };
//   fly = () => {
//     console.log('flutter');
//   };
// }

// type Pet = Dog | Bird;

// const havePet = (pet: Pet) => {
//   if (pet instanceof Bird) {
//     pet.fly();
//   }
// };

// havePet(new Bird());

// const input: HTMLInputElement = document.getElementById(
//   'input',
// ) as HTMLInputElement;

// interface Desiger {
//   name: string;
//   [index: string]: string;
// }

// const Desiger: Desiger = {
//   name: 'quill',
// };

// interface DownLoadedData {
//   id: number;
//   user?: {
//     name?: {
//       first: string;
//       last: string;
//     };
//   };
// }

// const downloadedData: DownLoadedData = {
//   id: 1,
// };

// console.log(downloadedData.user?.name?.first);

// const userData = downloadedData.user ?? 'no-user';
// type id = DownLoadedData['user'];
// enum Color {
//   RED,
//   BLUE,
// }

// let target = 'hello';
// let source: 'hello' = 'hello';
// target = source;

// interface FuncA {
//   (a: number, b: string): number;
//   (a: number, b: string): number;
// }

// function advancedFn(...args: number[]) {}

// advancedFn(1, 2, 3, 4, 5);
// type Engineer = {
//   name: string;
//   role: string;
// };

// type Blogger = {
//   name: string;
//   follower: number;
// };

// type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger {}
// const quill: EngineerBlogger = {
//   name: 'quill',
//   role: 'front',
//   follower: 1000,
// };

// function toLocaleLowerCase(x: string): string;
// function toLocaleLowerCase(x: number): number;
// function toLocaleLowerCase(x: string | number) {
//   if (typeof x === 'string') {
//     return x.toLocaleUpperCase();
//   }
//   return x;
// }

// const upperHello = toLocaleLowerCase('hello');
// const upperHello2 = toLocaleLowerCase(1);

// type NomadWorker = Engineer | Blogger;
// const describeNomadWorkerProfile = (nomadWorker: NomadWorker) => {
//   if ('role' in nomadWorker) {
//     console.log(nomadWorker.role);
//   }
// };

// class Dog {
//   kind: 'dog' = 'dog';
//   speak = () => {};
// }

// class Bird {
//   kind: 'bird' = 'bird';
//   speak = () => {};

//   fly = () => {};
// }

// type Pet = Dog | Bird;
// const havePet = (pet: Pet) => {
//   if (pet instanceof Bird) {
//     return pet.fly();
//   }
//   return pet.speak();
// };

// const input = <HTMLInputElement>document.getElementById('input');
// const input2 = document.getElementById('input') as HTMLInputElement;
// const input3 = document.getElementById('input')!;

// interface Designer {
//   name: string;
//   [index: string]: string;
// }

// const designer: Designer = {
//   name: 'david',
//   role: 'aaa',
// };

// interface DownloadedData {
//   id: number;
//   user?: {
//     name?: {
//       first: string;
//       last: string;
//     };
//   };
// }

// const downloadedData: DownloadedData = {
//   id: 1,
// };

// const userDate = downloadedData.user ?? 'no-user';
// type id = DownloadedData['id'];

// interface tmpFunc {
//   (x: string): number;
//   (x: number): number;
// }

// const upperHello5: tmpFunc = function (x: string | number) {
//   return 0;
// };

// const advancedFn = (...args: [number, string, boolean, ...number[]]) => {};

// advancedFn(0, 'hi', true, 1, 1, 1);

// const a: number[] = [1, 2, 3];

type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

type EngineerBlogger = Engineer & Blogger;
const quill: EngineerBlogger = {
  name: 'quill',
  role: 'front-end',
  follower: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = number | string;
type mix = NumberBoolean & StringNumber;

const toUpperCase = (value: string | number) => {
  if (typeof value === 'string') {
    value.toLocaleUpperCase;
  }
  return value;
};
const as = toUpperCase('hello');

type NomadWorker = Engineer | Blogger;
const describeProfile = (nomadWorker: NomadWorker) => {
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
};

// const input = document.getElementById('input')!;

interface Desiger {
  name: string;
  [string: string]: string;
}

const designer: Desiger = {
  name: 'taro',
  role: 'web',
};
interface TempFunc {
  (x: string): number;
  (x: number): number;
}

const upperHello: TempFunc = function (x: number | string) {
  return 0;
};

interface FuncA {
  (a: number, b: number): number;
  (a: string, b: number): number;
}
interface DownLoadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownLoadedData = {
  id: 1,
};

console.log(downloadedData.user?.name?.first);

const userdata = downloadedData.user ?? 'tom';
type id = DownLoadedData['id' | 'user'];

const advanced = (...args: readonly number[]) => {};

let milk = 'milk' as const;
let drink = milk;

const array2 = [1, 2] as const;
const peter = {
  name: 'Peter',
  age: 38,
} as const;

type PeterType = typeof peter;
