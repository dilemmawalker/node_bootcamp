const fs = require('fs');
exports.checking = (req, res) => {
  res.send('server says hello');
};

exports.check_post = (req, res) => {
  res.status(200).json({ message: 'Hello World', text: 'meri marzi' });
};

exports.getAllTours = (req, res) => {
  const file = JSON.parse(
    fs.readFileSync(
      `${__dirname}/../dev-data/data/tours-simple.json`,
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

exports.lengthAndTours = (req, res) => {
  const file = fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, data) => {
      let tour = JSON.parse(data);
      // console.log(JSON.parse(data));
      // res.send(JSON.parse(data));
      res.json({
        status: 'success',
        length: tour.length,
        data: JSON.parse(data)
      });
    }
  );
};

exports.createNewTour = (req, res) => {
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

exports.getParticularTour = (req, res) => {
  const data = fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, d) => {
      const id = req.params.id * 1;
      const data = JSON.parse(d);
      console.log(data);
      const tour = data.find(ele => ele.id === id);
      if (tour) return res.status(200).send(tour);
      else res.status(400).send('not found');
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

exports.updatingParticularTour = (req, res) => {
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

exports.deleteParticularTour = (req, res) => {
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
