//entry point of our application

const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student");

require("dotenv").config();
// express app setup
const app = express();

// connect to mongodb
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_LINK);
// ourdata is the name of the model
mongoose.Promise = global.Promise;

// middleware
app.use(express.static("public")); //to serve static files
// EXPRESS PARSER to parse the data sent or recieved from the database.
app.use(express.json());

// routes
app.use("/api", require("./routes/api"));

// middleware to handle errors
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

//app listening to requests at port 
app.listen(process.env.port || 4001, () => {
  console.log("listening for the requests now.");
}); //checking for any port no. defined via env variables

// app.get('/api', (req, res)=>{
//     res.send("Its Working!!")
// })
