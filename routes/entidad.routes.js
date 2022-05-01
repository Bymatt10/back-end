const express = require('express')
const router = express.Router()

const Entidad = require('../controllers/entidad.controller')
const entidad = new Entidad()

/* Get categories list */
router.get('/', entidad.list)
/* Get category by id */
router.get('/:id', entidad.get)

router.get('/obtener/:id', entidad.filtro)
/* Update category */
router.put('/update/:id', entidad.update)
/* Create category */
router.post('/create', entidad.create)
/* Delete category */
router.delete('/delete/:id', entidad.delete)

module.exports = router
