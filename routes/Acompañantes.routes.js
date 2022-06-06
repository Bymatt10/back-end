const express = require('express')
const router = express.Router()

const CompasReservas = require('../controllers/acompañantes.controller')
const compasReservas = new CompasReservas()

/* Get categories list */
router.get('/:id', compasReservas.list)
/* Get category by id */
// router.get('/:id', compasReservas.get)
/* Create category */
router.post('/create', compasReservas.create)

module.exports = router
