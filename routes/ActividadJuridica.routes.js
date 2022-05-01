const express = require('express')
const router = express.Router()

const ActividadJuridica = require('../controllers/actividadJuridica.controller')
const actividadJuridica = new ActividadJuridica()

/* Get categories list */
router.get('/', actividadJuridica.list)
/* Get category by id */
router.get('/:id', actividadJuridica.get)
/* Update category */
router.put('/update/:id', actividadJuridica.update)
/* Create category */
router.post('/create', actividadJuridica.create)
/* Delete category */
router.delete('/delete/:id', actividadJuridica.delete)

module.exports = router
