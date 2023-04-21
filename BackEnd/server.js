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
//read from USERS
//defines user schemas
const UserSchema = new mongoose.Schema({
  signupUsername: String,
  signupEmail: String,
  signupPassword: String,
});

const UserModel = mongoose.model('users', UserSchema); //UserModel allow interaction with database.

//a post method that will create new documents in the MongoDB collections 
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

// A get request that will retrieve documents from the MongoDB collections.
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

//read from CONTACT
//Defined schema 
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});


const contactModel = mongoose.model('contacts', contactSchema); //planModel allow interaction with database.

//a post method to add contacts
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
//a  route point that returns a contacts information
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
app.delete('/api/contact/:id', (req, res) => {
  console.log("Deleting: "+req.params.id); //output deleted contact id to console

  //find contact by id to delete
  //go to database to find id and delete 
  contactModel.findByIdAndDelete(req.params.id)
    .then(data => {
      res.json(data); //send back some data
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});

//The GET request to the /api/contact/:id endpoint will retrieve a specific document based on its ID. 
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

//read from ABOUT
//Defined schema 
const aboutSchema = new mongoose.Schema({
  member: String,
  title: String,
  text: String,
  texts: String,
});

const aboutModel = mongoose.model('abouts', aboutSchema); //planModel allow interaction with database.

// app.post('/api/abouts', (req, res) => {
//   console.log(req.body);
//   //create records in database
//   aboutModel.create({
//     member: req.body.member,
//     title: req.body.title,
//     text: req.body.text,
//     texts: req.body.texts,
//   }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
//   .catch((error)=>{res.status(500).send(error)}) //catch error
//   //res.send('Data received');
// })

//a  route point that returns a contacts information
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


//connect to port 4000
app.listen(port, () => {
  console.log(`Server listening on port 4000`)
})