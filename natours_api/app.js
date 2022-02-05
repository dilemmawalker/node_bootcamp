const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

app = express();

app.use(morgan("dev")); //predefined middleware from npm package.
app.use(express.json()); //middleware

const checking = (req, res) => {
  res.send("server says hello");
};

const check_post = (req, res) => {
  res.status(200).json({ message: "Hello World", text: "meri marzi" });
};

const getAllTours = (req, res) => {
  const file = JSON.parse(
    fs.readFileSync(
      `${__dirname}/starter/dev-data/data/tours-simple.json`,
      (err, data) => {
        // if (err) console.log("error");
        // else
        console.log(JSON.parse(data));
        return JSON.parse(data);
      }
    )
  );
  console.log(file);
  res.send(file);
};

const lengthAndTours = (req, res) => {
  const file = fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, data) => {
      let tour = JSON.parse(data);
      // console.log(JSON.parse(data));
      // res.send(JSON.parse(data));
      res.json({
        status: "success",
        length: tour.length,
        data: JSON.parse(data)
      });
    }
  );
};

const createNewTour = (req, res) => {
  const file = fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, data) => {
      let tour = JSON.parse(data);
      const id = tour.length;
      const newTour = Object.assign({ id: id }, req.body);
      tour.push(newTour);
      fs.writeFile(
        `${__dirname}/starter/dev-data/data/tours-simple.json`,
        JSON.stringify(tour),
        err => {
          res.send(newTour);
        }
      );
    }
  );
};

const getParticularTour = (req, res) => {
  const data = fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, d) => {
      const id = req.params.id * 1;
      const data = JSON.parse(d);
      console.log(data);
      const tour = data.find(ele => ele.id === id);
      if (tour) return res.status(200).send(tour);
      else res.status(400).send("not found");
    }
  );
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

const updatingParticularTour = (req, res) => {
  const id = req.params.id * 1;
  fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, data) => {
      const tours = JSON.parse(data);
      // const tour = tours.find(ele => ele.id === id);
      let tour, getidx;

      for (let i = 0; i < tours.length; i++) {
        if (tours[i].id === id) {
          tour = tours[i];
          getidx = i;
          break;
        }
      }
      console.log(req.body);

      for (let key in req.body) {
        let value = req.body[`${key}`];
        console.log(`${key}: ${value}`);
        tour[`${key}`] = value;
      }

      tours[getidx] = tour;
      console.log(tour);
      fs.writeFile(
        `${__dirname}/starter/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
          res.send(tours);
        }
      );
    }
  );
};

const deleteParticularTour = (req, res) => {
  fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, data) => {
      let tours = JSON.parse(data);
      const id = req.params.id * 1;
      let getidx = 0;

      for (let i = 0; i < tours.length; i++) {
        const ele = tours[i];
        if (ele.id === id) {
          getidx = i;
          break;
        }
      }
      tours.splice(getidx, 1);
      console.log(tours);
      fs.writeFile(
        `${__dirname}/starter/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
          res.send(tours);
        }
      );
    }
  );
};

const getAllUsers = (req, res) => {
  res.status(500).send("Not yet implemented");
};
const createUser = (req, res) => {
  res.status(500).send("Not yet implemented");
};
const getUser = (req, res) => {
  res.status(500).send("Not yet implemented");
};
const updateUser = (req, res) => {
  res.status(500).send("Not yet implemented");
};
const deleteUser = (req, res) => {
  res.status(500).send("Not yet implemented");
};

// app.get("/", checking);            //basic method
// app.post("/", check_post);
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours", lengthAndTours);
// app.post("/api/v1/tours", createNewTour);
// app.get("/api/v1/tours/:id", getParticularTour);
// app.patch("/api/v1/tours/:id", updatingParticularTour);
// app.delete("/api/v1/tours/:id", deleteParticularTour);

app.use((req, res, next) => {
  //route handler
  console.log("middleware!!!");
  next();
});

app //better method
  .route("/")
  .get(checking)
  .post(check_post);
app
  .route("/api/v1/tours")
  .get(getAllTours)
  .get(lengthAndTours)
  .post(createNewTour);

app
  .route("/api/v1/tours/:id")
  .get(getParticularTour)
  .patch(updatingParticularTour)
  .delete(deleteParticularTour);

app
  .route("/api/v1/users")
  .get(getAllUsers)
  .post(createUser);

app
  .route("/api/v1/urers/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

//start server
const port = 3000;
app.listen(port, () => {
  console.log("I am listening");
});
