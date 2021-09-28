// console.log(arguments);

// console.log(require("module").wrapper);


const c=require("./test-module1.js");       //module.exports
const calc1=new c();
// console.log(calc1.add(2,3));
// console.log(calc1.multiply(2,4));


const calc2=require('./test-module2.js');      //exports
// console.log(calc2.add(2,4));


//best way
const {add,multiply}=require("./test-module2.js");
console.log(add(2,3));
console.log(multiply(2,8));