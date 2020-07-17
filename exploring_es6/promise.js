
/*
*/

/*
function f1() {
    console.log("f1");
    return 1;
    // return new Promise((resolve, reject)=>{
    //     resolve("f1");
    // });
}
function f2() {
    console.log("f1");
    return 2;
    // return new Promise((resolve, reject)=>{
    //     resolve("f2");
    // });
}

Promise.all([
    f1(),
    f2()
])
.then(([r1, r2]) =>{
    console.log(`${r1}, ${r2}`);
}).then(()=>{
    console.log("h1");
})
*/

/*
function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        console.log("h0");
        setTimeout(() => resolve('DONE'), 3000); // (B)
        console.log("h1");
    });
}
asyncFunc()
.then(()=>{
    return 1;
})
.then(x => console.log('Result: '+x))
.then(()=> {
    throw new Error()
}).then(()=>{
    console.log("Before error handler.")
}).catch(reason=>{
    console.error(reason);
})
.then(()=>{
    console.log("After some error occured.")
});
*/

/*
async function f() {
    // var r = await asyncFunc();
    // console.log(r);
    console.log("h1");
}

var rf = f();
console.log(rf);
*/
// const p = Promise.resolve("a");
// console.log(p === Promise.resolve(p));
