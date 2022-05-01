const express = require('express')
const router = express.Router()

const CheckInsController = require('../controllers/check-ins.controllers')
const checkInsController = new CheckInsController()

/* Get check ins list */
router.get('/', checkInsController.list)
/* Get check in by id */
router.get('/:id', checkInsController.get)
/* Update check in */
router.put('/update/:id', checkInsController.update)
/* Create check in */
router.post('/create', checkInsController.create)
/* Delete check in */
router.delete('/delete/:id', checkInsController.delete)

module.exports = router
