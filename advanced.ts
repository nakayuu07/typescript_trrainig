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

// function toUpperCase(x: string): string;
// function toUpperCase(x: number): number;
// function toUpperCase(x: string | number): string | number {
//   if (typeof x === 'string') {
//     return x.toLocaleLowerCase;
//   }
//   return x;
// }

type NomadWorker = Engineer | Blogger;
const describeNomadWorkerProfile = (nomadWorker: NomadWorker) => {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    nomadWorker.role;
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
};

class Dog {
  speak = () => {
    console.log('bow-bow');
  };
}

class Bird {
  speak = () => {
    console.log('tyun-tyun');
  };
  fly = () => {
    console.log('flutter');
  };
}

type Pet = Dog | Bird;

const havePet = (pet: Pet) => {
  if (pet instanceof Bird) {
    pet.fly();
  }
};

havePet(new Bird());

const input: HTMLInputElement = document.getElementById(
  'input',
) as HTMLInputElement;

interface Desiger {
  name: string;
  [index: string]: string;
}

const Desiger: Desiger = {
  name: 'quill',
};

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

const userData = downloadedData.user ?? 'no-user';
type id = DownLoadedData['user'];
enum Color {
  RED,
  BLUE,
}

let target = 'hello';
let source: 'hello' = 'hello';
target = source;

interface FuncA {
  (a: number, b: string): number;
  (a: number, b: string): number;
}

function advancedFn(...args: number[]) {}

advancedFn(1, 2, 3, 4, 5);
