const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

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
// mongoose.connect(DB).then((con)=>{
//   console.log(con.connections);
//   console.log("database connection established");
// })

const tourSchema=new mongoose.Schema({
  name:String,
  rating:Number,
  price:Number
});
const Tour = mongoose.model('Tour',tourSchema);

const testTour = new Tour({
  name:"Swimming Panda",
  rating:6.9,
  price: 50
});
testTour.save().then((data)=>{
  console.log(data+"  saved new Schema Model"); 
}).catch(err=>{
  console.log('now saving');
})

//start server
console.log(process.env.PORT);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('I am listening');
});

