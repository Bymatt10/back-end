const MetodoPago = require('../models/metodoPago.model')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await MetodoPago.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const metodoPago = await MetodoPago.findAll(
      {
        where: {
          idusuarios: id
        }
      }
    )
    res.send(metodoPago)
  }

  async create (req, res, next) {
    const {
      nombreTarjeta,
      numeroTarjeta,
      fechaVence,
      cvc,
      tipoTarjeta,
      idusuarios
    } = req.body
    if (!nombreTarjeta) return res.status(400).send({ message: 'El nombre de la tarjeta es requerido' })
    if (!numeroTarjeta) return res.status(400).send({ message: 'El nuemro de la tarjeta es requerido' })
    if (!fechaVence) return res.status(400).send({ message: 'La fecha de vencimiento es requerida' })
    if (!cvc) return res.status(400).send({ message: 'El cvc es requerido' })
    if (!tipoTarjeta) return res.status(400).send({ message: 'El banco es requerido' })
    const metodoPago = await MetodoPago.create({
      nombreTarjeta,
      numeroTarjeta,
      fechaVence,
      cvc,
      tipoTarjeta,
      idusuarios
    })
    res.status(201).send(metodoPago)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await MetodoPago.destroy({
      where: {
        idmetodo: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
