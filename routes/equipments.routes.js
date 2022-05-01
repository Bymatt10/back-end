const express = require('express')
const router = express.Router()

const EquipmentsController = require('../controllers/equipments.controller')
const equipmentsController = new EquipmentsController()

/* Get equipments list */
router.get('/', equipmentsController.list)
/* Get equipment by id */
router.get('/:id', equipmentsController.get)
/* Update equipment */
router.put('/update/:id', equipmentsController.update)
/* Create equipment */
router.post('/create', equipmentsController.create)
/* Delete equipment */
router.delete('/delete/:id', equipmentsController.delete)

module.exports = router
