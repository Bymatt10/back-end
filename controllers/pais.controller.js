const Pais = require('../models/pais.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await Pais.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const pais = await Pais.findByPk(id)
    res.send(pais)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { Nombre } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!Nombre) return res.status(400).send({ message: 'Nombre es requerido' })
    const updateResult = await Pais.update(
      {
        Nombre
      },
      {
        where: {
          idPais: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const { Nombre } = req.body
    if (!Nombre) return res.status(400).send({ message: 'Nombre es requerido' })
    const Paises = await Pais.create({
      Nombre
    })
    res.status(201).send(Paises)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Pais.destroy({
      where: {
        idPais: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
