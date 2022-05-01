const express = require('express')
const router = express.Router()

const UsuarioRol = require('../controllers/usuarioRol.controller')
const usuarioRol = new UsuarioRol()

/* Get categories list */
router.get('/', usuarioRol.list)
/* Get category by id */
router.get('/:id', usuarioRol.get)
/* Update category */
router.put('/update/:id', usuarioRol.update)
/* Create category */
router.post('/create', usuarioRol.create)
/* Delete category */
router.delete('/delete/:id', usuarioRol.delete)

module.exports = router
