const Categoria = require('../models/categoriaHab.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await Categoria.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const categoria = await Categoria.findByPk(id)
    res.send(categoria)
  }
}
