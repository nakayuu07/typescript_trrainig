"use strict";
var _a, _b, _c;
const quill = {
    name: 'quill',
    role: 'front-end',
    follower: 1000,
};
const describeNomadWorkerProfile = (nomadWorker) => {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        nomadWorker.role;
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
};
class Dog {
    constructor() {
        this.speak = () => {
            console.log('bow-bow');
        };
    }
}
class Bird {
    constructor() {
        this.speak = () => {
            console.log('tyun-tyun');
        };
        this.fly = () => {
            console.log('flutter');
        };
    }
}
const havePet = (pet) => {
    if (pet instanceof Bird) {
        pet.fly();
    }
};
havePet(new Bird());
const input = document.getElementById('input');
const Desiger = {
    name: 'quill',
};
const downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
let target = 'hello';
let source = 'hello';
target = source;
function advancedFn(...args) { }
advancedFn(1, 2, 3, 4, 5);
