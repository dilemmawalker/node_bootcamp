const fs=require("fs");          
const crypto =require('crypto');   

var start = Date.now();
process.env.UV_THREADPOOL_SIZE = 6;             //not working somehow?????????  

setTimeout(()=>console.log("Timer 1 finished"),0);
setTimeout(()=>                   
    console.log("Timer 2 finished"),0            // 3 seconds timer.
);


fs.readFile('text-file.js','utf-8',()=>{        
    console.log("File read"); 
    console.log("-----------");                          //  I/O Finished.  
    setTimeout(()=>console.log("Timer 1 finished"),0);
    console.log("fuck 0");
    setTimeout(()=>                   
        console.log("Timer 2 finished"),3000            // 3 seconds timer.
    );
    console.log("fuck1");
    setImmediate(()=>{                      
        console.log("Immediate 1 finisehd")
    });    
    console.log("fuck2");       
    process.nextTick(()=>{ console.log("I am the first")});

    crypto.pbkdf2("hello world",'salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start," encrypted");   
    });
    crypto.pbkdf2("hello world",'salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start," encrypted");   
    });
    crypto.pbkdf2("hello world",'salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start," encrypted");   
    });
    crypto.pbkdf2("hello world",'salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start," encrypted");   
    });
    crypto.pbkdf2("hello world",'salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start," encrypted");   
    });
    crypto.pbkdf2("hello world",'salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start," encrypted");   
    });
});

console.log("Top level code");      //top level code , without any callbacks is always read first.