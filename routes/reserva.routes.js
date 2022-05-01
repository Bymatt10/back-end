const express = require('express')
const router = express.Router()

const Reserva = require('../controllers/reserva.controller')
const reserva = new Reserva()

/* Get categories list */
router.get('/', reserva.list)
/* Get category by id */
router.get('/:id', reserva.get)
/* Update category */
router.put('/update/:id', reserva.update)
/* Create category */
router.post('/create', reserva.create)
/* Delete category */
router.delete('/delete/:id', reserva.delete)

module.exports = router
