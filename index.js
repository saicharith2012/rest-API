//entry point of our application

const express = require("express");
const mongoose = require("mongoose");

// express app setup
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/ourdata");
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

//app listening to requests at port 4000
app.listen(process.env.port || 4000, () => {
  console.log("listening for the requests now.");
}); //checking for any port no. defined via env variables

// app.get('/api', (req, res)=>{
//     res.send("Its Working!!")
// })
