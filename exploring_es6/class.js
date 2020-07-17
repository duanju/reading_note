/*
class Point {
    constructor(x, y) {
        console.log('constructor of Point!');
        this.x = x;
        this.y = y;
        this.args = arguments;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    static staticMethod() {
        return "static method";
    }
    prototypeMethod() {
        return 'prototype method';
    }
    *[Symbol.iterator] () {
        for(const arg of this.args) {
            yield arg;
        }
    }
}

// let p = new Point(25, 9);
// console.log(p.toString());
// console.log(Point.staticMethod());
// for(let f of p) {
//     console.log(f);
// }

class Line extends Point {
    constructor() {
        console.log('constructor of Line!');
        super(12);
    }

    static supperStaticMethod(){
        return "Line -> super: " + super.staticMethod();
    }
}

// let l = new Line(0, 10);

// console.log(Line.supperStaticMethod());

class AnotherClass {
    anotherMethod() {
        console.log('in AnotherClass');
    }
}

class RewriteConstuctor extends Point {
    constructor() {
        return Object.create(new AnotherClass());
    }

    toString() {
        return "hello RewriteConstuctor class";
    }
}

let r = new RewriteConstuctor();
// console.log(r.anotherMethod());

function f() {

}

f = null;
// f();

console.log(Object.getPrototypeOf(new Line()));
*/

class Parent {
    constructor() {
        this.name = "Ju";
    }
    call() {
        console.log(this.name);
    }
}

class Child extends Parent {
    call() {
        this.name = "Duan";
        super.call();
    }
}

let c = new Child();
c.call();