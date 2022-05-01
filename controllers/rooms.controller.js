const Booking = require('../models/booking.model')
const Category = require('../models/category.model')
const Feature = require('../models/feature.model')
const Image = require('../models/image.model')
const Room = require('../models/room.model')

module.exports = class RoomsController {
  async list (req, res, next) {
    const list = await Room.findAll({
      include: [{
        model: Category,
        as: 'category'
      }, {
        model: Image,
        as: 'images'
      }, {
        model: Feature,
        as: 'features'
      }, {
        model: Booking,
        as: 'bookings'
      }]
    })
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const publicUser = await Room.findByPk(id)
    res.send(publicUser)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { name, description, status, category_id: categoryId } = req.body
    const updateResult = await Room.update(
      {
        name,
        description,
        status,
        category_id: categoryId
      },
      {
        where: {
          room_id: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const { name, description, status, category_id: categoryId } = req.body
    const room = await Room.create({
      name,
      description,
      status,
      category_id: categoryId
    })
    res.status(201).send(room)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Room.destroy({
      where: {
        room_id: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
