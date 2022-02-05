const express = require('express');

const userRouter = express.Router();
const fs = require('fs');

const getAllUsers = (req, res) => {
  res.status(500).send('Not yet implemented');
};
const createUser = (req, res) => {
  res.status(500).send('Not yet implemented');
};
const getUser = (req, res) => {
  res.status(500).send('Not yet implemented');
};
const updateUser = (req, res) => {
  res.status(500).send('Not yet implemented');
};
const deleteUser = (req, res) => {
  res.status(500).send('Not yet implemented');
};

// app.get("/", checking);            //basic method
// app.post("/", check_post);
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours", lengthAndTours);
// app.post("/api/v1/tours", createNewTour);
// app.get("/api/v1/tours/:id", getParticularTour);
// app.patch("/api/v1/tours/:id", updatingParticularTour);
// app.delete("/api/v1/tours/:id", deleteParticularTour);

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser);

userRouter
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
