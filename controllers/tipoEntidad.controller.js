const TipoPersona = require('../models/tipoEntidad.model')

module.exports = class tipoEntidadController {
  async list (req, res, next) {
    const list = await TipoPersona.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const tipoEntidad = await TipoPersona.findByPk(id)
    res.send(tipoEntidad)
  }
}
