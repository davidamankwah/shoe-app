const express = require('express')
const app = express()
const port = 4000

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.oiviaxb.mongodb.net/?retryWrites=true&w=majority'); //Database connection. Asychronous call
}

//Defined schema 
const menSchema = new mongoose.Schema({
  name: String,
  price: Double,
  about: String,
  image_url: String,
});

const menModel = mongoose.model('mens', menSchema); //planModel allow interaction with database.

app.get('/', function (req, res) {
  res.send('Hello World')
})

//a post method to add todo plan
app.post('/api/plans', (req, res) => {
  console.log(req.body);
  //create records in database
  menModel.create({
    name: req.body.name,
    price: req.body.price,
    about: req.body.about,
    image_url: req.body.image_url,
  }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
  .catch((error)=>{res.status(500).send(error)}) //catch error
  //res.send('Data received');
})

// a  route point that find plans and gets it to display 
app.get('/api/mens', (req, res) => {
  menModel.find((error, data) => {
    res.json(data);
  })
})

//connect to port 4000
app.listen(port, () => {
  console.log(`Server listening on port 4000`)
})