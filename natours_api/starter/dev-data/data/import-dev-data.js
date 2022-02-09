//sample script file to import & delete all data at once.

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs=require('fs');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: `./config.env` });
// console.log(process.env);

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false,
useUnifiedTopology: true })
.then(con=>{
  // console.log(con.connections);
  console.log("running");
})

//reading file
const file= JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`));

const importData=async()=>{
const tempTour = await Tour.create(file);
process.exit();
}
const deleteData = async()=>{
    const tempTour = await Tour.deleteMany();
    process.exit();
}

if(process.argv[2]==='--import'){
    importData();
}
else if(process.argv[2]==='--delete'){
    deleteData();
}
console.log(process.argv);  //main important element to be used.