const express = require('express')
const router = express.Router()
const controller = require('../controllers/destinos')

router.get('/', controller.index)
router.get('/promocoes', controller.promos)
router.get('/:id', controller.show)

module.exports = router
