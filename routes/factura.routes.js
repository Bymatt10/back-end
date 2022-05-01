const express = require('express')
const router = express.Router()

const Factura = require('../controllers/factura.controller')
const factura = new Factura()

/* Get categories list */
router.get('/', factura.list)
/* Get category by id */
router.get('/:id', factura.get)
/* Create category */
router.post('/create', factura.create)

module.exports = router
