const copy = <T extends { name: string }, U extends keyof T>(
  value: T,
  key: U,
): T => {
  value[key];
  return value;
};
console.log(copy({ name: 'quill', age: 38 }, 'name'));
// type K = keyof { name: string; age: number };

// class LightDatebase<T extends string | number | boolean> {}

// const stringLightDatebase = new LightDatebase();

// const copy2 = <T>(value: T): T => {
//   return value;
// };

// console.log(copy2('aaa'));
// console.log(copy2(true));

// const copy3 = <T extends { name: string }, U extends keyof T>(
//   value: T,
//   key: U,
// ) => {
//   value[key];
//   return value;
// };

// console.log(copy3({ name: 'aaa', age: 38 }, 'age'));

// type key = keyof { name: string; age: number };

// class Database<T extends string | number | boolean> {
//   private data: T[] = [];
//   add(item: T) {
//     this.data.push(item);
//   }
//   remove(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   get() {
//     return this.data;
//   }
// }

// const database = new Database<string>();
// database.add('apple');
// database.add('banana');
// database.add('orange');
// database.remove('banana');
// console.log(database.get());

// interface TmpDatabase<T> {
//   id: number;
//   data: T[];
// }

// const tmpDatebase: TmpDatabase<number> = {
//   id: 3,
//   data: [32],
// };

// const tmpDatebase2: TmpDatabase<string> = {
//   id: 3,
//   data: ['aaa'],
// };

// interface Todo {
//   title: string;
//   text: string;
// }

// type Todoable = Partial<Todo>;
// type ReadTodo = Readonly<Todo>;

// const fetchDate: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 300);
// });

// fetchDate.then((data) => {
//   data.toUpperCase();
// });
// const vegetables: Array<string> = ['tomato', 'bloccoli', 'asparagus'];

// interface ResponceData<T = any> {
//   data: T;
//   status: number;
// }

// let tmp: ResponceData;

// type MappedTypes = {
//   [P in 'Tomato' | 'pumpkin']: P;
// };

// type ConditionalTypes = 'tomato' extends string ? number : boolean;
// type ConditionalTypesInter = { tomato: 'tomato' } extends { tomato: infer R }
//   ? R
//   : boolean;

// type ditributiveConditionalTypes = 'tomato' | 'pumpkin' extends 'tomato'
//   ? number
//   : boolean;

const copy2 = <T extends { name: string }, U extends keyof T>(
  value: T,
  key: U,
): T => {
  console.log(key);
  return value;
};

console.log(copy2({ name: 'quill', age: 38 }, 'name'));
type K = keyof { name: string; age: number };

class LightDatebase<T extends string | number | boolean> {
  private data: T[] = [];
  add = (item: T) => {
    this.data.push(item);
  };
  remove = (item: T) => {
    this.data.splice(this.data.indexOf(item), 1);
  };

  get = () => {
    return this.data;
  };
}

const stringLightDatebase = new LightDatebase<string>();

interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tmpDatebase: TmpDatabase<number> = {
  id: 1,
  data: [32],
};

interface Todo {
  title: string;
}

const array3: [string, number] = ['1', 2];

type TodoAble = Partial<Todo>;
type ReadTodo = Readonly<Todo>;
