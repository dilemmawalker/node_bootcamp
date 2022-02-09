const mongoose = require('mongoose');
const tourSchema=new mongoose.Schema({
    name:{
      type:String,
      trim:true,
    },
    price:Number,
    maxGroupSize:{
      type:Number,
      required:[true,'Group size is necessary']
    },
    duration:{
      type:Number,
      required:true
    },
    difficulty:{
      type:String,
      required:true
    },
    ratingsAverage:{
      type:Number,
      default:0
    },
    ratingsQuantity:{
      type:Number,
      default:0
    },
    priceDiscount:{
      type:Number
    },
    summary:{
      type:String,
      trim:true,
      required:true
    },
    description:{
      type:String,
      trim:true,
    },
    imageCover:{
      type:String,
      required:true,
    },
    images:[String],
    createdAt:{
      type:Date,
      default:Date.now()
    },
    startDates:[Date],

  });
  const Tour = mongoose.model('Tour',tourSchema);

  module.exports = Tour;