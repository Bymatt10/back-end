const express = require('express')
const router = express.Router()

const CiudadController = require('../controllers/ciudad.controller')
const ciudadController = new CiudadController()

/* Get categories list */
router.get('/', ciudadController.list)
/* Get category by id */
router.get('/:id', ciudadController.get)
/* Update category */
router.put('/update/:id', ciudadController.update)
/* Create category */
router.post('/create', ciudadController.create)
/* Delete category */
router.delete('/delete/:id', ciudadController.delete)

module.exports = router
