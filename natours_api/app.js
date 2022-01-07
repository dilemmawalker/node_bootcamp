const express = require("express");
const fs = require("fs");

app = express();

app.use(express.json()); //middleware

app.get('/',(req,res)=>{
    res.send("server says hello"); 
})

app.post('/',(req,res)=>{
    res.status(200).json({message:'Hello World' , text: 'meri marzi'});
})

app.get('/api/v1/tours',(req,res)=>{
        const file=JSON.parse(fs.readFile(`${__dirname}/starter/dev-data/data/tours-simple.json`,(err,data)=>{
            // if(err)
            // console.log("error");
            // else
            // console.log(data);
            // return data;
        }));
    console.log(file);
    res.send(file);
})

app.get("/api/v1/tours", (req, res) => {
  const file = fs.readFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    (err, data) => {
      let tour = JSON.parse(data);
      // console.log(JSON.parse(data));
      // res.send(JSON.parse(data));
      res.json({
        status: "success",
        length: tour.length,
        data: JSON.parse(data),
      });
    }
  );
});

app.post("/api/v1/tours", (req, res) => {
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
        (err) => {
          res.send(newTour);
        }
      );
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log("I am listening");
});
