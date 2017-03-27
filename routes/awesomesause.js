const {Router}=require('express')

const path = require('path')

const awesomeRouter = Router()

awesomeRouter.get('/awesomesause', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../public', 'awesomesause.html'))
})

module.exports = awesomeRouter
