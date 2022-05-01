const express = require('express')
const router = express.Router()

const BookingsController = require('../controllers/bookings.controller')
const bookingController = new BookingsController()

/* Get categories list */
router.get('/', bookingController.list)
/* Get category by id */
router.get('/:id', bookingController.get)
/* Update category */
router.put('/update/:id', bookingController.update)
/* Create category */
router.post('/create', bookingController.create)
/* Delete category */
router.delete('/delete/:id', bookingController.delete)

module.exports = router
