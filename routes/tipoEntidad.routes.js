const express = require('express')
const router = express.Router()

const TipoEntidad = require('../controllers/tipoEntidad.controller')
const tipoEntidad = new TipoEntidad()

/* Get categories list */
router.get('/', tipoEntidad.list)
/* Get category by id */
router.get('/:id', tipoEntidad.get)

module.exports = router
