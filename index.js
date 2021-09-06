// const fs=require('fs');      //synchronous way

// // import { readFileSync } from 'fs';         //this can be done by using '.mjs' extension.
// //let val=readFileSync('./txt/input.txt','utf-8');

// let val=fs.readFileSync('./txt/input.txt','utf-8');

// // console.log(val);
// let val2=`The new value we get is : ${val}. \n Created at time : ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',val2);

// console.log("new file written");


const fs=require('fs');                 //asynchronous way

let val=fs.readFile('./txt/input.txt','utf-8',(err,data)=>{ //callback
    if(err)
    console.log("error");
    else
    console.log(data);                                      //working in background
});

console.log("reading");
