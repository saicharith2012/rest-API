const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/students", (req, res, next) => {
  Student.find({})
    .then((students) => {
      res.send(students);
    })
    .catch(next);
});
// here the callback function returns the
// "type of request that is being sent" as a response
// with /students being the endpoint

router.post("/students", (req, res, next) => {
  Student.create(req.body)
    .then(function (student) {
      res.send(student);
    })
    .catch(next);
}); //returning the data that is recieved from the request

router.put("/students/:id", (req, res, next) => {
  Student.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then((student) => {
    Student.findOne({ _id: req.params.id })
    .then((student) => {
      res.send(student);
    });
  });
}); //ID  is the unique id assigned by mongodb to each doc of data.

router.delete('/students/:id',(req,res,next)=>{
  Student.findOneAndDelete({_id: req.params.id})
  .then((student)=>{
      res.send(student);
  });
});

module.exports = router;
