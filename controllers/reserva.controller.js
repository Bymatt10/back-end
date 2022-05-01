const Reserva = require('../models/reservas.model')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await Reserva.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const reserva = await Reserva.findAll(
      {
        where: {
          idusuario: id
        }
      }
    )
    res.send(reserva)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      fechaEntrada,
      fechaSalida,
      estado,
      idservicio,
      idhabitacion,
      idusuario,
      idcategoriaHab
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!fechaEntrada) return res.status(400).send({ message: 'La fecha de entrada es requerida' })
    if (!fechaSalida) return res.status(400).send({ message: 'La fecha de salida es requerida' })
    if (!estado) return res.status(400).send({ message: 'El estado es requerido' })
    if (!idhabitacion) return res.status(400).send({ message: 'La habitacion es requerida' })
    if (!idusuario) return res.status(400).send({ message: 'El usuario es requerido' })
    const reserva = await Reserva.update(
      {
        fechaEntrada,
        fechaSalida,
        estado,
        idservicio,
        idhabitacion,
        idusuario,
        idcategoriaHab
      },
      {
        where: {
          idreserva: id
        }
      }
    )
    res.status(204).send(reserva)
  }

  async create (req, res, next) {
    const {
      fechaEntrada,
      fechaSalida,
      estado,
      idservicio,
      idhabitacion,
      idusuario,
      idcategoriaHab
    } = req.body
    if (!fechaEntrada) return res.status(400).send({ message: 'La fecha de entrada es requerida' })
    if (!fechaSalida) return res.status(400).send({ message: 'La fecha de salida es requerida' })
    if (!estado) return res.status(400).send({ message: 'El estado es requerido' })
    if (!idhabitacion) return res.status(400).send({ message: 'La habitacion es requerida' })
    if (!idusuario) return res.status(400).send({ message: 'El usuario es requerido' })
    const reserva = await Reserva.create({
      fechaEntrada,
      fechaSalida,
      estado,
      idservicio,
      idhabitacion,
      idusuario,
      idcategoriaHab
    })
    res.status(201).send(reserva)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Reserva.destroy({
      where: {
        idreserva: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
