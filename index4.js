//creating a short API
const fs=require('fs');
const http=require('http');
const url=require('url');

const changes=require('./modules/replacetemplate');         //we keep name "changes" same as function name
                                                            //we define, just import it as module rather than
                                                            //using directly.

// let changes=(val,temp)=>{
//    let output=temp.replace(/{%image%}/g,val.image);
//     output=output.replace(/{%productname%}/g,val.productName);
//     output= output.replace(/{%quantity%}/g,val.quantity);
//     output=output.replace(/{%price%}/g,val.price);
//     output=output.replace(/{%from%}/g,val.from);
//     output=output.replace(/{%nutrients%}/g,val.nutrients);
//     output=output.replace(/{%id%}/g,val.id);
//     output=output.replace(/{%description}/g,val.description);
  
//     if(val.organic)
//     output= output.replace("{%not_organic%}","Organic");
//     else
//     output=output.replace("{%not_organic%}","not-organic");
//     return output;
// }

let server=http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(url.parse(req.url,true));

    const {query,pathname} = url.parse(req.url,true);

    // let pathname=req.url;
    let data_json=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
    let data_object=JSON.parse(data_json);
    // console.log(data_json);
    // console.log(data_object);

    let tempoverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
    let tempcard=fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
    let tempproduct=fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
    
    //overview page
    if(pathname=='/overview' || pathname=='/'){
        res.writeHead(200,'ok',{
            'Content-type':'text/html',
        });
        let cardshtml=data_object.map((val)=>{          //CPU of program.
            return changes(val,tempcard);
        })                            
        // console.log(cardshtml);
        cardshtml=cardshtml.join('');    //join to conver into string;

        const output=tempoverview.replace("{%product-cards%}",cardshtml);
        res.end(output);
    }
    //product page
    else if(pathname=='/product'){
        // console.log(query);
        
        let idx=query.id;
        // console.log(data_object[idx]);
       let changed= changes(data_object[idx],tempproduct);

        res.end(changed);
    }
    //API
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
    //not found
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