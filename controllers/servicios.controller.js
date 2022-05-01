const Servicio = require('../models/servicios.model')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await Servicio.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const servicio = await Servicio.findByPk(id)
    res.send(servicio)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      servicio,
      precio,
      img,
      descripcion
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!servicio) return res.status(400).send({ message: 'El servicio es requerido' })
    if (!precio) return res.status(400).send({ message: 'El precio es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'La descripcion es requerida' })
    const habitacion = await Servicio.update(
      {
        servicio,
        precio,
        img,
        descripcion
      },
      {
        where: {
          idservicio: id
        }
      }
    )
    res.status(204).send(habitacion)
  }

  async create (req, res, next) {
    const {
      servicio,
      precio,
      img,
      descripcion
    } = req.body
    if (!servicio) return res.status(400).send({ message: 'El servicio es requerido' })
    if (!precio) return res.status(400).send({ message: 'El precio es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'La descripcion es requerida' })
    const habitacion = await Servicio.create({
      servicio,
      precio,
      img,
      descripcion
    })
    res.status(201).send(habitacion)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Servicio.destroy({
      where: {
        idservicio: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
