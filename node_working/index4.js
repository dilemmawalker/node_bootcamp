const eventemitter=require('events');
const http=require('http');

class newsale extends eventemitter{
    constructor(){
        super();                    //always written to grasp functions of parent class.
    }
}

const myemitter=new newsale();

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

const server=http.createServer();

server.on("request",(req,res)=>{                    //getting the request
    console.log("response received");               //
    console.log(req.url);                           
    res.end("Request has been received");           //sending the result
})

server.on("request",(req,res)=>{
    console.log("Another request");
})

server.on("close",(req,res)=>{
    console.log("server has been closeed");
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is running");
})