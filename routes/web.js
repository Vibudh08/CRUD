const express = require('express')
const HomeController = require('../controllers/homeController')
const router = express.Router()

router.get('/',HomeController.getAllDoc)
router.post('/',HomeController.createDoc)
router.get('/edit/:id',HomeController.editDoc)
router.post('/update/:id',HomeController.updateDocById)
router.post('/delete/:id',HomeController.deleteDocById)

module.exports = router
