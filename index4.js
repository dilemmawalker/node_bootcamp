//creating a short API
const fs=require('fs');
const http=require('http');

let server=http.createServer((req,res)=>{
    let pathname=req.url;
    let data_json=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');

    if(pathname=='/overview' || pathname=='/'){
        res.end("this is running");
    }
    else if(pathname=='/over'){
        res.end("we are still working");
    }
    else if(pathname=='/api'){
        //now instead of a callback, we are intitially getting data, then using it everytime.
        // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data)=>{
        //     let product_data=JSON.parse(data);
        //     console.log(product_data);
        //     res.writeHead(200,"OK",{
        //         "Content-type":"application/json",
        //     });
        //     res.end(data);
        // });
        console.log(JSON.parse(data_json));
        res.end(data_json);
    }
    else{
      res.writeHead(404,"workiiiiiing",{
          "Content-type":"text",
          "my-made-up":"made up header"
      })
      res.end("<h1>not found!!!");
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("running");
})