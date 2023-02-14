//entry point of our application

const express = require('express')

const app = express()

//app listening to requests at port 4000
app.listen(process.env.port || 4000, ()=>{
    console.log('listening for the requests now.')
}) //checking for any port no. defined via env variables


app.get('/api', (req, res)=>{
    res.send("Its Working!!")
})