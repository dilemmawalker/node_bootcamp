const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

app = express();

app.use(morgan("dev")); //predefined middleware from npm package.
app.use(express.json()); //middleware

//defining Routers
const tourRouter = require("./starter/routes/tourRoutes");
const userRouter = require("./starter/routes/userRoutes");

//applying Routers as Middleware.
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
