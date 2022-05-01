const Feature = require('../models/feature.model')

module.exports = class FeaturesController {
  async list (req, res, next) {
    const list = await Feature.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await Feature.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      name,
      description
    } = req.body

    // TODO: Agregar validaciones
    if (!name) res.status(400).send({ message: 'Nombre es requerido' })

    const updateResult = await Feature.update(
      {
        name,
        description: description
      },
      {
        where: {
          feature_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      name,
      description
    } = req.body

    // TODO: Agregar validaciones
    if (!name) return res.status(400).send({ message: 'Nombre es requerido' })

    try {
      const publicUser = await Feature.create({
        name,
        description: description
      })
      res.status(201).send(publicUser)
    } catch (error) {

    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Feature.destroy({
      where: {
        feature_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
