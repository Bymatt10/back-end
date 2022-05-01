const express = require('express')
const router = express.Router()

const MetodoPago = require('../controllers/metodoPago.controller')
const metodoPago = new MetodoPago()

/* Get categories list */
router.get('/', metodoPago.list)
/* Get category by id */
router.get('/:id', metodoPago.get)
/* Create category */
router.post('/create', metodoPago.create)
/* Delete category */
router.delete('/delete/:id', metodoPago.delete)

module.exports = router
