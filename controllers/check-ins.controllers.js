const CheckIn = require('../models/check-in.model')

module.exports = class CheckInsController {
  async list (req, res, next) {
    const list = await CheckIn.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await CheckIn.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      booking_id: bookingId,
      check_in_date: checkInDate
    } = req.body

    // TODO: Agregar validaciones

    const updateResult = await CheckIn.update(
      {
        booking_id: bookingId,
        check_in_date: checkInDate
      },
      {
        where: {
          check_in_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      booking_id: bookingId,
      check_in_date: checkInDate
    } = req.body

    // TODO: Agregar validaciones

    try {
      const publicUser = await CheckIn.create({
        booking_id: bookingId,
        check_in_date: checkInDate
      })
      res.status(201).send(publicUser)
    } catch (error) {

    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await CheckIn.destroy({
      where: {
        check_in_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
