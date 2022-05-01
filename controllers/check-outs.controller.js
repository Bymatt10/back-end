const CheckOut = require('../models/check-out.model')

module.exports = class CheckOutsController {
  async list (req, res, next) {
    const list = await CheckOut.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await CheckOut.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      booking_id: bookingId,
      check_out_date: checkOutDate
    } = req.body

    // TODO: Agregar validaciones

    const updateResult = await CheckOut.update(
      {
        booking_id: bookingId,
        check_out_date: checkOutDate
      },
      {
        where: {
          check_out_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      booking_id: bookingId,
      check_out_date: checkOutDate
    } = req.body

    // TODO: Agregar validaciones

    try {
      const publicUser = await CheckOut.create({
        booking_id: bookingId,
        check_out_date: checkOutDate
      })
      res.status(201).send(publicUser)
    } catch (error) {

    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await CheckOut.destroy({
      where: {
        guestcheck_out_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
