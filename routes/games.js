const {Router}=require('express')

const path = require('path')

const gameRouter = Router()

gameRouter.get('/boardgames', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../public', 'boardgames.html'))
})

gameRouter.get('/videogames', (req, res, next)=>{
  res.send(`<h3>Search for games</h3><form method="POST"><input type="text"><button type="submit">Search</button>`)
})

gameRouter.post('/videogames',(req, res, next)=>{
  console.log("submit a vidgame")
  next()
})

module.exports = gameRouter
