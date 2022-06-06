const Compas = require('../models/acompañantes.model')
// const Reserva = require('../models/reservas.model')

module.exports = class CompasReservas {
  async list (req, res, next) {
    const id = req.params.id
    const reserva = await Compas.findAll(
      {
        where: {
          idusuario: id
        }
      }
    )
    res.send(reserva)
  }

  async create (req, res, next) {
    const {
      Nombre,
      Edad,
      Identificacion,
      Telefono,
      idusuario
    } = req.body
    if (!Nombre) return res.status(400).send({ message: 'El nombre es requerido' })
    if (!Edad) return res.status(400).send({ message: 'La edad es requerida es requerida' })
    if (!Identificacion) return res.status(400).send({ message: 'La identificacion es requerida' })
    if (!Telefono) return res.status(400).send({ message: 'El telefono es requerido' })
    const reserva = await Compas.create({
      Nombre,
      Edad,
      Identificacion,
      Telefono,
      idusuario
    })
    res.status(201).send(reserva)
  }
}
