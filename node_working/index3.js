const eventEmitter = require('events');

const  myemitter=new eventEmitter();            //creating an object of eventEmitter class.

myemitter.on("newsale",()=>{                    //listener 1
    console.log("our listener 1 works");
});

myemitter.on("newsale",()=>{                    //listener 2
    console.log("I am the 2nd request");
});

myemitter.on("newsale",(val,res)=>{             //listener 3
    console.log(`leftover value is : ${val}`);
});

myemitter.emit("newsale",10);                   //emitter 1




