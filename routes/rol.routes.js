const express = require('express')
const router = express.Router()

const Rol = require('../controllers/rol.controller')
const rol = new Rol()

/* Get categories list */
router.get('/', rol.list)
/* Get category by id */
router.get('/:id', rol.get)
/* Update category */
router.put('/update/:id', rol.update)
/* Create category */
router.post('/create', rol.create)
/* Delete category */
router.delete('/delete/:id', rol.delete)

module.exports = router
