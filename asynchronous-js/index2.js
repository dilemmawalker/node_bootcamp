//doing proper promises usage.....
const fs=require('fs');
const superagent=require('superagent');

const readFilePro=(file)=>{       //function to read file using promise.
    return new Promise((resolve,reject)=>{  //promise object which has resolves & rejects callbacks.
        fs.readFile(file,(err,data)=>{      //Resolve to resolve with value, or reject to reject with a reason.
            if(err)
            reject(err);
            resolve(data);
        })
    })
}


const writeFilePro=(file,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,(err)=>{
            if(err)
            reject("reejcted!!!");
            resolve("this file has been written");
        })
    })
}

//chanined promises!!!
                        //data is data we get from readFilePro function.
readFilePro("dog.txt").then((data)=>{
    console.log("Breed: " +data);

return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    }).then((res)=>{
        console.log(res.body.message);

        return writeFilePro("dog-image.txt",res.body.message);
        // fs.writeFile("dog-image.txt",res.body.message,()=>{
        //     console.log("image saved!!!");
        // })
    }).then((val)=>{
        console.log("Random dog image saved!!!!!");
    }).catch((err)=>{           //one single f(x) to handle errors from all promises.
        console.log(err.message);
    })
