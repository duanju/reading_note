const x = 3;

function func(randomize) {
    if(randomize) {
        let x = Math.random();
        return x;
    }

    x = 1;
    return x;
}
// console.log(func(false));
// console.log(func(true));

// template literals
function printCoord(x, y) {
    console.log(`the input corrd is ${x} - ${y}`);
}

// printCoord(101.22, 89.11);

const HTML_5_SKELETHON = `
    <html>
        <header></header>
        <body></body>
    <html>
`;

// console.log(HTML_5_SKELETHON);

const characters = [
    {name: 'Frodo', race: 'Hobbit'},
    { name: 'Sam', race: 'Hobbit' },
    { name: 'Legolas', race: 'Elf' },
    { name: 'Aragorn', race: 'Man' },
    { name: 'Boromir', race: 'Man' }
];

const men = characters.filter(function filterMen(element) {
    return element.race == 'Man';
});

// console.log(men);

const array = [1, 2, 3];
var squares = array.map(x=> x*x);
// console.log(squares);

const date = [matched, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)/.exec('2000-12-21');
// console.log(date);
// console.log(date[1]);

var obj = {foo: 123};
var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
// console.log(propDesc);

var arr = ['a', 'b', 'c'];
for(var elem of arr) {
    elem = 'a';
}

// console.log(arr);

arr.forEach(e=>{
    e = 'a';
});

// console.log(arr);

for(const [index, elem] of arr.entries()) {
    // console.log(`${index}: ${elem}`);
}

(function logAllArguments(...args) {
    for(const arg of args) {
        // console.log(arg);
    }
})(1,2,3,4,4)

// console.log(Math.max(...[1,2,4,3]));

var arr1 = ['1', 'b'];
var arr2 = ['c', 'd'];

arr1.push(...arr2);

// console.log(arr1);

const arr3 = ['d', 'e'];
// console.log([...arr1, ...arr2, ...arr3]);

class Persion {
    constructor(name='') {
        this.name = name;
    }
    describe() {
        console.log(`hello ${this.name}`);
    }
}

const my = new Persion('Ju Duan');
// my.describe();

const map = new Map();
map.set('name', 'Ju Duan');
map.set('address', {'county': 'wuzhong'});
// console.log(map.get('address'));

const map2 = [...'abc', ...'def'];
// console.log(map2);

// import * as lib from 'lib'; // could not import statement outside a module
// console.log(lib.square(11));

// console.log(`Object.isNaN(true): ${isNaN(true)}`);
// console.log(`Object.isNaN('???'): ${isNaN('???')}`);
// console.log(`Number.isNaN(true): ${Number.isNaN(true)}`);
// console.log(`Number.isNaN(1): ${Number.isNaN(1)}`);
// console.log(`Number.isNaN('a'): ${Number.isNaN('a')}`);

/*

console.log(`Math.sign(-8): ${Math.sign(-8)}`);
 console.log(`Math.sign(0): ${Math.sign(0)}`);
 console.log(`Math.sign(8): ${Math.sign(8)}`);
 console.log(`Math.trunc(-3.1): ${Math.trunc(-3.1)}`);
 console.log(`Math.trunc(3.1): ${Math.trunc(3.1)}`);
 console.log(`Math.trunc(3.9): ${Math.trunc(3.9)}`);
 console.log(`Math.trunc(-3.9): ${Math.trunc(-3.9)}`);

console.log(Number.parseInt('Fe',17));
console.log(Number.parseInt('11', 10));
console.log(`Number.isFinite(0x1f): ${Number.isFinite(0x1f)}`);
console.log(`Number.isFinite(1): ${Number.isFinite(1)}`);
console.log(`Number.isFinite(11111111111111111111111111111111111111111111111111): ${Number.isFinite(11111111111111111111111111111111111111111111111111)}`);
console.log(`Number.isFinite(Number.NaN): ${Number.isFinite(Number.NaN)}`);

console.log(`Number.EPSION is ${Number.EPSILON}`)
console.log(`Number.MAX_SAFE_INTEGER is ${Number.MAX_SAFE_INTEGER}`)
console.log(`Number.MIN_SAFE_INTEGER is ${Number.MIN_SAFE_INTEGER}`)
console.log(`Math.fround(10.1) is ${Math.fround(10.1)}`)

console.log('\u{1F680}');
console.log('\uD83D\uDE80');
*/

for (const ch of 'x\uD83D\uDE80y') {
    // console.log(ch);
}

// console.log(typeof Symbol('Ju'));

let symbolObj = {
    [Symbol('my_key')]: 1,
    enum:2,
    nonEnum:3
};

Object.defineProperty(symbolObj, 'nonEnum', {enumerable:false});
// console.log(Object.keys(symbolObj));
// console.log(Object.getOwnPropertyNames(symbolObj));
// console.log(symbolObj)

// console.log(`\``);
// console.log(`\${`);
// console.log(`\u{58}`);

function tagFunction(args) {
    console.log(args);
}

const name = '<ju duan'
// tagFunction`ju`

function order(x, y) {
    if(x > y) {
        var tmp = x;
        x = y;
        y = tmp;
        {
            let tmp2 = x;
        }

        console.log(tmp2);
    }
    console.log(`tmp is ${tmp} and x is ${x}`);
    return [x, y];
}

// order(4,1);

const immutable = {};
immutable['name'] = "Ju";
// console.log(immutable.name);

Object.freeze(immutable);
immutable.name = "Duan";    // the value of the immutable variable could not be changed.
// console.log(immutable.name);

immutable.age = 33;
// console.log("age: " + immutable.age);

const myProfile = Object.freeze({name:{}})
myProfile.name.fullName = "Ju Duan";
// console.log(myProfile.name);

if (true) {
    const func = function() {
        console.log(myVar)
    }

    let myVar = 3;
    // func();
}

const numbs = [];
for (var i = 0; i<3; i++) {
    numbs.push(()=>i);
}
// console.log("var numbs:" + numbs.map(x=>x()));

numbs.length = 0;
for (let i = 0; i<3; i++) {
    numbs.push(()=>i);
}
// console.log("let numbs:" + numbs.map(x=>x()));

const students = [{'name':'li'}, {'name':'ju'}, {'name':'jerry'}];
students.techer = {'name':'Mr Gao'};

// console.log('for...in');
for(const student in students) {
    // console.log(student);
}

// console.log('for...of');
for(const student of students) {
    // console.log(student);
}

const foo = 'outer';
function bar(func = x => foo) {
    const foo = 'inner';
    console.log(func());
}
// bar();

if (true) {
    // console.log(innerFunc());
    function innerFunc() {
        return 'Hello';
    }
}

// Destructuring
const destObj = {first:'Jane', last:'Doe'};
const {last:l, first:f} = destObj;

// console.log(`f: ${f}, l: ${l}`);

const {last, first} = destObj;
// console.log(`first: ${first}, last: ${last}`);

let descX;
[descX] = "abc";
// console.log(`x: ${descX}`);

const destNums = [1, 2, 3, 4, 5];
const [one, ...five] = destNums;
// console.log([one, five]);

// const [descFirst=3, descLast] = []; // x = 3; y = undefined


const [destFirst=3, descLast=destFirst] = []; // x = 3; y = undefined
// console.log([destFirst, destLast]);

const [{prop:destPx=123}={}] = [];
// console.log(destPx);

function threeParams(x, y, z) {
    console.log('Hello');
}

// threeParams(1,2,3,4);

function namedFunction({userName='ju', age=33}) {
    console.log(`name: ${userName}, age: ${age}`);
}

// namedFunction({age:34, userName:'Alex'});

// console.log(typeof (()=>{}));
// console.log(function*(){});
// console.log(typeof class{});

let getSetObj = {
    v : -1,
    get foo() { return this.v;},
    [Symbol("symbol_key")]:50,
    set bar(value){this.v = value;}
}

getSetObj.bar = 10;
// console.log(getSetObj.foo);

function myIndexOf(arry, element) {
    return arry.findIndex(x=>Object.is(x, element));
}

// console.log(myIndexOf([1, NaN, 2],NaN));

console.log(Object.keys(getSetObj));
console.log(Object.getOwnPropertySymbols(getSetObj));
console.log(Reflect.ownKeys(getSetObj));

for(const key in getSetObj) {
    console.log(key);
}
