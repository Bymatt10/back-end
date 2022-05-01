const express = require('express')
const router = express.Router()

const CategoriesController = require('../controllers/categories.controller')
const categoriesController = new CategoriesController()

/* Get categories list */
router.get('/', categoriesController.list)
/* Get category by id */
router.get('/:id', categoriesController.get)
/* Update category */
router.put('/update/:id', categoriesController.update)
/* Create category */
router.post('/create', categoriesController.create)
/* Delete category */
router.delete('/delete/:id', categoriesController.delete)

module.exports = router
