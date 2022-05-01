const Booking = require('../models/booking.model')

module.exports = class BookingsController {
  async list (req, res, next) {
    const list = await Booking.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const booking = await Booking.findByPk(id)
    res.send(booking)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      room_id: roomId,
      guest_id: guestId,
      start_date: startDate,
      end_date: endDate,
      status
    } = req.body

    const updateResult = await Booking.update(
      {
        room_id: roomId,
        guest_id: guestId,
        start_date: startDate,
        end_date: endDate,
        status
      },
      {
        where: {
          booking_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      room_id: roomId,
      guest_id: guestId,
      start_date: startDate,
      end_date: endDate,
      status
    } = req.body
    const booking = await Booking.create({
      room_id: roomId,
      guest_id: guestId,
      start_date: startDate,
      end_date: endDate,
      status
    })
    res.status(201).send(booking)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Booking.destroy({
      where: {
        booking_id: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
