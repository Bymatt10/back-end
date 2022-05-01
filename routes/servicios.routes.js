const express = require('express')
const router = express.Router()

const Servicios = require('../controllers/servicios.controller')
const servicio = new Servicios()

/* Get categories list */
router.get('/', servicio.list)
/* Get category by id */
router.get('/:id', servicio.get)
/* Update category */
router.put('/update/:id', servicio.update)
/* Create category */
router.post('/create', servicio.create)
/* Delete category */
router.delete('/delete/:id', servicio.delete)

module.exports = router
