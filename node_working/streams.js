const fs=require('fs');
const server=require('http').createServer();

server.on("request",(req,res)=>{
    //Solution 1 : doing asynchronously
    // fs.readFile("text-file.txt",(err,data)=>{
    //     if(err)
    //     console.log("errrror");
    //     res.end(data);
    // })

    //Solutions 2 : Streams                //this is what sol 3 , i.e. Pipe does internally.
//     const readable=fs.createReadStream("text-file.txt");     
//    readable.on("data",(chunk)=>{
//        res.write(chunk);
//    })
//     readable.on("end",()=>{
//         res.end();
//     })
//     readable.on("error",(err)=>{
//         console.log(err);
//         res.statusCode=500;
//         res.end("File not found");
//     })

    //Solution 3 : pipe function 
    const readable=fs.createReadStream("text-file.txt");
    readable.pipe(res);

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("running");
});