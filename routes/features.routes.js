const express = require('express')
const router = express.Router()

const FeaturesController = require('../controllers/features.controller')
const featuresController = new FeaturesController()

/* Get features list */
router.get('/', featuresController.list)
/* Get feature by id */
router.get('/:id', featuresController.get)
/* Update feature */
router.put('/update/:id', featuresController.update)
/* Create feature */
router.post('/create', featuresController.create)
/* Delete feature */
router.delete('/delete/:id', featuresController.delete)

module.exports = router
