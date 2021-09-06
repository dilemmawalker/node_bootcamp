const http= require('http');
const url=require('url');

let server=http.createServer((req,res)=>{
    let path=req.url;
    if(path=='/overview' || path=='/'){
        res.end("hi, this is overall view page");
    }
    else if(path=='/over'){
        res.end("fuck u, we are still working");
    }
    else{
        res.writeHead(404,"bitch bitch bitch",{
            'Content-type':'string data text',
            'madeup-header':"I made this up",
        });
        res.end("<h1>page not found");
    }
    console.log(req.url);
    // res.end("hello new user");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("running");
});