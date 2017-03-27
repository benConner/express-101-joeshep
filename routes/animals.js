const {Router}=require('express')

const path = require('path')

const animalRouter = Router()
const { newPage, submit } = require('../controllers/animalCtrl')

// animalRouter.use((req, res, next)=>{
//   if (req.user === 'farmer'){
//     next()
//   }else{
//     res.status('403').send('forbidden')
//   }
// })

animalRouter.get('/monkeys', (req, res, next)=>{
  newPage(req, res, null)
  //res.sendFile(path.join(__dirname, '../public', 'monkeys.html'))
})
animalRouter.get('/chickens', (req, res, next)=>{
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
})
animalRouter.post('/chickens', submit)

module.exports = animalRouter
