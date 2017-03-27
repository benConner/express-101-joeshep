const {Router}=require('express')

const router = Router()

router.use(require('./animals'))
router.use(require('./awesomesause'))
router.use(require('./games'))

module.exports = router
