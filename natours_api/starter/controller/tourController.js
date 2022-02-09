const Tour = require(`./../models/tourModel`);

const fs = require('fs');
exports.checking = (req, res) => {
  res.send('server says hello');
};

exports.check_post = (req, res) => {
  res.status(200).json({ message: 'Hello World', text: 'meri marzi' });
};

exports.getAllTours = async(req, res) => {
  try{
    const Tours = await Tour.find();
    console.log(Tours);
    return res.status(201).send(Tours);
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }

};

exports.lengthAndTours = async (req, res) => {
  try{
    const Tours = await Tour.find();
    return res.send(Tours.length());
  }
  catch(err){
    console.log(err)
    return res.send(err);
  }
};

// const testTour = new Tour({
//   name:"Swimming Panda",
//   rating:6.9,
//   price: 50
// });
// testTour.save().then((data)=>{
//   console.log(data+"  saved new Schema Model"); 
// }).catch(err=>{
//   console.log('now saving');
// })
exports.createNewTour = async (req, res) => {
  try{
  //   const newTour = new Tour(req.body);
  // newTour.save();

  const newTour = await Tour.create(req.body);
  console.log(newTour);
  return res.status(201).send(newTour);
  }
  catch(err){
    return res.send(err);
  }
  
};

exports.getParticularTour = async(req, res) => {
  try{
    const Tours = await Tour.findOne({_id:req.params.id});
    return res.status(200).send(Tours);
  }catch(err){
    console.log(err);
    return res.status(400).send(err);
  }
};
// const file = fs.readFileSync(              //reading synchronously file & then sending result.
//   `${__dirname}/starter/dev-data/data/tours-simple.json`,
//   (err, data) => {
//     // console.log(JSON.parse(data));
//     return JSON.parse(data);
//   }
// );
//   res.send(JSON.parse(file));
// });

exports.updatingParticularTour = async(req, res) => {
  try{
    const id = req.params.id;
    const Tours =await Tour.findOneAndUpdate({_id:id},req.body);
    res.status(200).send(Tours);
  }
  catch(err){
    console.log(err);
    res.status(500).send("Not working");
  }
};

exports.deleteParticularTour = async(req, res) => {
  try{
    const Tours = await Tour.findOneAndDelete(req.params.id);
    return res.status(200).send(Tours);
  }
  catch(err){
    console.log(err);
    return res.status(500).send(err);
  }
};
