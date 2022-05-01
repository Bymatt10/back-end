const express = require('express')
const router = express.Router()

const RoomsController = require('../controllers/rooms.controller')
const roomsController = new RoomsController()

/* Get rooms list */
router.get('/', roomsController.list)
/* Get room by id */
router.get('/:id', roomsController.get)
/* Update room */
router.put('/update/:id', roomsController.update)
/* Create room */
router.post('/create', roomsController.create)
/* Delete room */
router.delete('/delete/:id', roomsController.delete)

module.exports = router
