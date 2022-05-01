const express = require('express')
const router = express.Router()

const CategoriaHabitacion = require('../controllers/equipamiento.controller')
const categoriaHab = new CategoriaHabitacion()

/* Get categories list */
router.get('/', categoriaHab.list)
/* Get category by id */
router.get('/:id', categoriaHab.get)
/* Update category */
router.put('/update/:id', categoriaHab.update)
/* Create category */
router.post('/create', categoriaHab.create)
/* Delete category */
router.delete('/delete/:id', categoriaHab.delete)

module.exports = router
