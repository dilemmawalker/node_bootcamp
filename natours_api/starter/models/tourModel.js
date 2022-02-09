const mongoose = require('mongoose');
const tourSchema=new mongoose.Schema({
    name:String,
    rating:Number,
    price:Number
  });
  const Tour = mongoose.model('Tour',tourSchema);

  module.exports = Tour;