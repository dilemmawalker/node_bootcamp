// console.log(arguments);

// console.log(require("module").wrapper);

const c=require("./test-module1.js");
const obj=new c();
console.log(obj.add(2,3));
console.log(obj.multiply(2,4));//