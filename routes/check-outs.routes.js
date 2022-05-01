const express = require('express')
const router = express.Router()

const CheckOutsController = require('../controllers/check-outs.controller')
const checkOutsController = new CheckOutsController()

/* Get check outs list */
router.get('/', checkOutsController.list)
/* Get check out by id */
router.get('/:id', checkOutsController.get)
/* Update check out */
router.put('/update/:id', checkOutsController.update)
/* Create check out */
router.post('/create', checkOutsController.create)
/* Delete check out */
router.delete('/delete/:id', checkOutsController.delete)

module.exports = router
