"use strict";
const copy = (value, key) => {
    value[key];
    return value;
};
console.log(copy({ name: 'quill', age: 38 }, 'name'));
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
