const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: `./config.env` });
console.log(process.env);

//start server
console.log(process.env.PORT);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('I am listening');
});
