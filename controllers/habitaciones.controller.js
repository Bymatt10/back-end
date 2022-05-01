const Habitaciones = require('../models/habitaciones.models')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await Habitaciones.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          idcategoriaHab: id
        }
      }
    )
    res.send(habitaciones)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      nombre,
      estado,
      descripcion,
      img,
      precio,
      idequipamiento,
      idcategoriaHab
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!nombre) return res.status(400).send({ message: 'El nombre de la habitacion es requerido' })
    if (!estado) return res.status(400).send({ message: 'El estado de la habitacion es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'La descripcion de la habitacion es requerida' })
    if (!img) return res.status(400).send({ message: 'La imagen de la habitacion es requerida' })
    if (!idequipamiento) return res.status(400).send({ message: 'El equipamiento es requerido' })
    if (!idcategoriaHab) return res.status(400).send({ message: 'La categoria de habitacion es requerida' })
    const habitacion = await Habitaciones.update(
      {
        nombre,
        estado,
        descripcion,
        img,
        precio,
        idequipamiento,
        idcategoriaHab
      },
      {
        where: {
          idhabitacion: id
        }
      }
    )
    res.status(204).send(habitacion)
  }

  async create (req, res, next) {
    const {
      nombre,
      estado,
      descripcion,
      img,
      precio,
      idequipamiento,
      idcategoriaHab
    } = req.body
    if (!nombre) return res.status(400).send({ message: 'El nombre de la habitacion es requerido' })
    if (!estado) return res.status(400).send({ message: 'El estado de la habitacion es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'La descripcion de la habitacion es requerida' })
    if (!img) return res.status(400).send({ message: 'La imagen de la habitacion es requerida' })
    if (!idequipamiento) return res.status(400).send({ message: 'El equipamiento es requerido' })
    if (!idcategoriaHab) return res.status(400).send({ message: 'La categoria de habitacion es requerida' })
    const habitacion = await Habitaciones.create({
      nombre,
      estado,
      descripcion,
      img,
      precio,
      idequipamiento,
      idcategoriaHab
    })
    res.status(201).send(habitacion)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Habitaciones.destroy({
      where: {
        idhabitacion: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
