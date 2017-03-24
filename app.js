'use strict'
const express = require('express')
const app = express()

// const requestTime = (req, res, next)=>{
//   req.requestedTime = Date.now();
//   next();
// }
app.use(express.static(__dirname+'/public'))
app.get('/monkeys', (req, res, next)=>{
  res.sendFile(__dirname+'/public/monkeys.html')
})
app.get('/chickens', (req, res, next)=>{
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
})
app.post('/chickens', (res, req, next)=>{
  console.log('hey');
})

app.use((req, res)=>{
  res.send(`You're in the wrong place bub`)
})

app.listen(3000,()=>{
  console.log('Server Listening on 3000')
})
