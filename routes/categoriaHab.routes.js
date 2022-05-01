const express = require('express')
const router = express.Router()

const CategoriaHabitacion = require('../controllers/categoria.controller')
const categoriaHab = new CategoriaHabitacion()

/* Get categories list */
router.get('/', categoriaHab.list)
/* Get category by id */
router.get('/:id', categoriaHab.get)

module.exports = router
