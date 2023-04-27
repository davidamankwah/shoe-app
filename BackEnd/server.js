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

// Serve the static files from the Shoe app
//build project
const path = require('path');
app.use(express.static(path.join(__dirname, '../build'))); //build location
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.oiviaxb.mongodb.net/?retryWrites=true&w=majority'); //Database connection. Asychronous call
}


//defines user schemas
const UserSchema = new mongoose.Schema({
  signupUsername: String,
  signupEmail: String,
  signupPassword: String,
});

const UserModel = mongoose.model('users', UserSchema); //UserModel allow interaction with database.

//a post method that will create new documents in the users collections 
app.post('/api/users', (req, res) => {
  console.log(req.body);
  //create records in database
  UserModel.create({
    signupUsername: req.body.signupUsername,
    signupEmail: req.body.signupEmail,
    signupPassword: req.body.signupPassword,
  }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
  .catch((error)=>{res.status(500).send(error)}) //catch error
  //res.send('Data received');
})

// A get request that will retrieve documents from the users collections.
app.get('/api/users', (req, res) => {
  UserModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while fetching books');
    });
});


//Defined contact schema 
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});


const contactModel = mongoose.model('contacts', contactSchema); //conatctModel allow interaction with database.

//a post method that will create new documents in the contact collections 
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

/
// A get request that will retrieve documents from the contact collections.
app.get('/api/contacts', (req, res) => {
  contactModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while fetching books');
    });
});



//listen for delete method
//delete documents in contact collection
app.delete('/api/contact/:id', (req, res) => {
  console.log("Deleting: "+req.params.id); //output deleted contact id to console

  //find contact by id to delete
  //go to database to find id and delete 
  contactModel.findByIdAndDelete(req.params.id)
    .then(data => {
      res.json(data); //sends back some data
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});

//The GET request to the /api/contact/:id endpoint will retrieve a specific document based on its ID. 
//This allows information to be edited.
app.get('/api/contact/:id', (req, res)=>{
  contactModel.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({message: "Error retrieving contact"});
    });
});


// listen request to change contact by id
// override the record
app.put('/api/contact/:id', async (req, res) => {
  console.log("Update: " + req.params.id); //output update contact id to console

  try {
    const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(updatedContact);
    res.send(updatedContact);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});


//Defined schema 
const aboutSchema = new mongoose.Schema({
  member: String,
  title: String,
  text: String,
  texts: String,
});

const aboutModel = mongoose.model('abouts', aboutSchema); //aboutModel allow interaction with database.

//a  route point that returns a about information
app.get('/api/abouts', (req, res) => {
  aboutModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while fetching books');
    });
});

//define boot schema
const bootSchema = new mongoose.Schema({
  pid: Number,
  productName: String,
  price: Number,
  productImage: String,
});

const bootModel = mongoose.model('boots', bootSchema);

app.get('/api/boots', (req, res) => {
  bootModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while fetching books');
    });
});

// Handles any requests that don't match the ones above
//For all the routes not specified above, send back a file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

//connect to port 4000
app.listen(port, () => {
  console.log(`Server listening on port 4000`)
})