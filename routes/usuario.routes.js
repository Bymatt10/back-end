const express = require('express')
const router = express.Router()

const Usuario = require('../controllers/usuario.controller')
const usuario = new Usuario()

/* Get categories list */
router.get('/', usuario.list)
/* Get category by id */
router.get('/:id', usuario.get)
/* Update category */
router.put('/update/:id', usuario.update)
/* Create category */
router.post('/create', usuario.create)
/* Delete category */
router.put('/delete/:id', usuario.delete)

module.exports = router
