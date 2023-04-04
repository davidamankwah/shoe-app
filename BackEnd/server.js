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
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});


const contactModel = mongoose.model('contacts', contactSchema); //planModel allow interaction with database.

//a post method to add todo plan
app.post('/api/contacts', (req, res) => {
  console.log(req.body);
  //create records in database
  contactModel.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
  .catch((error)=>{res.status(500).send(error)}) //catch error
  //res.send('Data received');
})

// a  route point that find plans and gets it to display 
app.get('/api/contacts', (req, res) => {
  contactModel.find((error, data) => {
    res.json(data);
  })
})

const UserSchema = new mongoose.Schema({
  username: String,
  emails: String,
  password: String,
});

const UserModel = mongoose.model('users', UserSchema); //planModel allow interaction with database.

//a post method to add todo plan
app.post('/api/users', (req, res) => {
  console.log(req.body);
  //create records in database
  UserModel.create({
    username: req.body.username,
    emails: req.body.emails,
    password: req.body.password,
  }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
  .catch((error)=>{res.status(500).send(error)}) //catch error
  //res.send('Data received');
})

// a  route point that find plans and gets it to display 
app.get('/api/users', (req, res) => {
  UserModel.find((error, data) => {
    res.json(data);
  })
})

//connect to port 4000
app.listen(port, () => {
  console.log(`Server listening on port 4000`)
})