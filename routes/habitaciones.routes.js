const express = require('express')
const router = express.Router()

const Habitacion = require('../controllers/habitaciones.controller')
const habitacion = new Habitacion()

/* Get categories list */
router.get('/', habitacion.list)
/* Get category by id */
router.get('/:id', habitacion.get)
/* Update category */
router.put('/update/:id', habitacion.update)
/* Create category */
router.post('/create', habitacion.create)
/* Delete category */
router.delete('/delete/:id', habitacion.delete)

module.exports = router
