const express = require('express')
const router = express.Router()

const GuestsController = require('../controllers/guests.controller')
const guestsController = new GuestsController()

/* Get employees list */
router.get('/', guestsController.list)
/* Get employee by id */
router.get('/:id', guestsController.get)
/* Update employee */
router.put('/update/:id', guestsController.update)
/* Create employee */
router.post('/create', guestsController.create)
/* Delete employee */
router.delete('/delete/:id', guestsController.delete)

module.exports = router
