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

// readFilePro("dog.txt").then((data)=>{
//     console.log("Breed : "+data);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
// }).then((res)=>{
//     console.log(res.body.message);

//     return writeFilePro("dog-image.txt",res.body.message);
// }).then(()=>{
//     console.log("Random dog image saved");
// }).catch((err)=>{
//     console.log(error.message);
// });

const getdogpic=async()=>{
    try{
    const data=await readFilePro("dog.txt");     //wait for promise to resolve
    console.log("Breed of dog: "+data);

    const res=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log("Breed of dog: "+ res.body.message);

    const aa=await writeFilePro("dog-image.txt",res.body.message);
    console.log("Image of random Dog saved!");
}
catch(err){
    throw err;
    console.log(err);
}
return "2: I am ready";
}

console.log("1");
(async()=>{
    try{
    const x=await getdogpic();
    console.log(x);
    console.log("2.1");
    }
    catch(err){
        console.log(err.message);
    }
})();

console.log("3");