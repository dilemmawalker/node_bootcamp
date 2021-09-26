const fs=require('fs');             //Currently, none of this is inside event loop
                                    //hence these functions are not working in the same order as they would
                                    // would had inside event loop order.

setTimeout(()=>{                    //working outside event loop.
    console.log("Timer 1 finished"),0
});
setImmediate(()=>{                      //working outside event loop.
    console.log("Immediate 1 finisehd")
});

fs.readFile('text-file.js','utf-8',()=>{        //heavy file, hence takes time to read.
    console.log("File read");               
})

console.log("Top level code");      //top level code , without any callbacks is always read first.