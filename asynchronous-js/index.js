const fs=require('fs');     //showing the problem with callbacks
const superagent=require('superagent');
// fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
//     console.log("Breed: "+data);

//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((req,res)=>{
//         console.log(res.body.message);

//         fs.writeFile("dog-image.txt",res.body.message,()=>{
//             console.log("dog image saved!!!!!!");
//         });
//     });
// });


//now using real promises to work  :)

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    console.log("Breed: "+data);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res)=>{                          //when fulfilled request.
        console.log(res.body.message);

        fs.writeFile("dog-image.txt",res.body.message,()=>{
            console.log("dog image saved!!!!!!");
        });
    },(res)=>{                              //for unfulfilled request.
        console.log(res+"  result not got!!!!")
    }).catch((error)=>{
        console.log(error.message);
    })
})