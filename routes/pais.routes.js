const express = require('express')
const router = express.Router()

const PaisController = require('../controllers/pais.controller')
const paisController = new PaisController()

/* Get categories list */
router.get('/', paisController.list)
/* Get category by id */
router.get('/:id', paisController.get)
/* Update category */
router.put('/update/:id', paisController.update)
/* Create category */
router.post('/create', paisController.create)
/* Delete category */
router.delete('/delete/:id', paisController.delete)

module.exports = router
