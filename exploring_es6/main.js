import System from 'systemjs'

console.log("start to execute main.js");

// import {sqrt, square, diag} from './lib.js';

// console.log(square(2, 3));

// import './lib.js';

System.import('./lib2.js').then(m2=>{m2.sayHello('Ju')}).catch(e=>{
    console.log('error occured when importing lib2.js');
    console.log(e);
});