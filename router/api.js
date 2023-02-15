const express = require("express");
const router = express.Router();

router.get("/students", (req, res) => {
  res.send({ type: "GET" });
});
// here the callback function returns the
// "type of request that is being sent" as a response
// with /students being the endpoint

router.post("/students", (req, res) => {
  res.send({
    type: "POST",
    name: req.body.name,
    roll: req.body.roll,
  });
}); //returning the data that is recieved from the request

router.put("/students/:id", (req, res) => {
  res.send({ type: "PUT" });
}); //ID  is the unique id assigned by mongodb to each doc of data.

router.delete("/students/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
