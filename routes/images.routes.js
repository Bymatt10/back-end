const express = require('express')
const router = express.Router()

const ImagesController = require('../controllers/images.controller')
const imagesController = new ImagesController()

/* Get images list */
router.get('/', imagesController.list)
/* Get images list by room id */
router.get('/by-room/:room_id', imagesController.listByRoom)
/* Get image by id */
router.get('/:id', imagesController.get)
/* Update image */
router.put('/update/:id', imagesController.update)
/* Create image */
router.post('/create', imagesController.create)
/* Delete image */
router.delete('/delete/:id', imagesController.delete)

module.exports = router
