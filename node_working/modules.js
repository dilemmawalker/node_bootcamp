// console.log(arguments);

// console.log(require("module").wrapper);


const c=require("./test-module1.js");       //module.exports
const calc1=new c();
// console.log(calc1.add(2,3));
// console.log(calc1.multiply(2,4));


const calc2=require('./test-module2.js');      //exports
// console.log(calc2.add(2,4));


const {add,multiply}=require("./test-module2.js");  //best way
// console.log(add(2,3));
// console.log(multiply(2,8));

//cashing proof
require("./test-module3.js")();
require("./test-module3.js")();
require("./test-module3.js")();
//      O/P proves that whole module is not loaded again & again,
//      rather it is stored as cache memory & accessed i.e.
//      loading happens only once.