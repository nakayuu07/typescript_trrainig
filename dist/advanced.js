"use strict";
// type Engineer = {
//   name: string;
//   role: string;
// };
var _a;
const quill = {
    name: 'quill',
    role: 'front',
    follower: 1000,
};
function toLocaleLowerCase(x) {
    if (typeof x === 'string') {
        return x.toLocaleUpperCase();
    }
    return x;
}
const upperHello = toLocaleLowerCase('hello');
const upperHello2 = toLocaleLowerCase(1);
const describeNomadWorkerProfile = (nomadWorker) => {
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
};
class Dog {
    constructor() {
        this.kind = 'dog';
        this.speak = () => { };
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
        this.speak = () => { };
        this.fly = () => { };
    }
}
const havePet = (pet) => {
    if (pet instanceof Bird) {
        return pet.fly();
    }
    return pet.speak();
};
const input = document.getElementById('input');
const input2 = document.getElementById('input');
const input3 = document.getElementById('input');
const designer = {
    name: 'david',
    role: 'aaa',
};
const downloadedData = {
    id: 1,
};
const userDate = (_a = downloadedData.user) !== null && _a !== void 0 ? _a : 'no-user';
const upperHello5 = function (x) {
    return 0;
};
const advancedFn = (...args) => { };
advancedFn(0, 'hi', true, 1, 1, 1);
const a = [1, 2, 3];
