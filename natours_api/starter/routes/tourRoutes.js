const express = require('express');
const tourRouter = express.Router();
const {
  getAllTours,
  lengthAndTours,
  createNewTour,
  getParticularTour,
  updatingParticularTour,
  deleteParticularTour,
  aliasTopTours
} = require(`${__dirname}/../controller/tourController`);

const fs = require('fs');

app.use((req, res, next) => {
  //route handler
  console.log('middleware!!!');
  next();
});

// tourRouter //better method
//   .route('/')
//   .get(checking)
//   .post(check_post);

tourRouter.route('/top-5-cheapest').get(aliasTopTours,getAllTours);
tourRouter
  .route('/')
  .get(getAllTours)
  .get(lengthAndTours)
  .post(createNewTour);

tourRouter
  .route('/:id')
  .get(getParticularTour)
  .patch(updatingParticularTour)
  .delete(deleteParticularTour);

module.exports = tourRouter;
