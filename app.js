'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

//routes
const routes = require('./routes/')

const requestTime = (req, res, next)=>{
  req.requestedTime = Date.now();
  next();
}
app.use(express.static(__dirname+'/public'))

app.use(requestTime)
app.use(routes)

app.use((req, res)=>{
  res.send(`You're in the wrong place bub`)
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
  console.log(`Server Listening on ${port}`)
})
