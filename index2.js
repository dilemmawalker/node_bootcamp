const fs=require('fs');

// let val1=fs.readLine('./txt/input.txt');
fs.readFile('./txt/outputtt.txt','utf-8',(err,data)=>{
    if(err)
    return console.log("error");
    
    fs.readFile('./txt/input.txt','utf-8',(err,data2)=>{
        console.log(data);
        fs.writeFile('./txt/final.txt',`${data}${data2}`,(err)=>{
            console.log("file has been written!!!!");
        })
    })
})