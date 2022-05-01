const ActividadJuridica = require('../models/actividadJuridica.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await ActividadJuridica.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const actividadjuridica = await ActividadJuridica.findByPk(id)
    res.send(actividadjuridica)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { actividad, descripcion } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!actividad) return res.status(400).send({ message: 'Actividad es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'Descripcion es requerido' })
    const Actividad = await ActividadJuridica.update(
      {
        actividad,
        descripcion
      },
      {
        where: {
          idactividad: id
        }
      }
    )
    res.status(204).send(Actividad)
  }

  async create (req, res, next) {
    const { actividad, descripcion } = req.body
    if (!actividad) return res.status(400).send({ message: 'Nombre es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'Pais es requerido' })
    const Actividad = await ActividadJuridica.create({
      actividad,
      descripcion
    })
    res.status(201).send(Actividad)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await ActividadJuridica.destroy({
      where: {
        idactividad: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
