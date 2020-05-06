"use strict";
const copy = (value, key) => {
    value[key];
    return value;
};
console.log(copy({ name: 'quill', age: 38 }, 'age'));
class LightDatebase {
}
const stringLightDatebase = new LightDatebase();
const copy2 = (value) => {
    return value;
};
console.log(copy2('aaa'));
console.log(copy2(true));
const copy3 = (value, key) => {
    value[key];
    return value;
};
console.log(copy3({ name: 'aaa', age: 38 }, 'age'));
class Database {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const database = new Database();
database.add('apple');
database.add('banana');
database.add('orange');
database.remove('banana');
console.log(database.get());
const tmpDatebase = {
    id: 3,
    data: [32],
};
const fetchDate = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello');
    }, 300);
});
fetchDate.then((data) => {
    data.toUpperCase();
});
const vegetables = ['tomato', 'bloccoli', 'asparagus'];
let tmp;
