const bcrypt = require('bcrypt')
const Booking = require('../models/booking.model')
const Guest = require('../models/guest.model')

module.exports = class GuestsController {
  async list (req, res, next) {
    const list = await Guest.findAll({
      include: [{
        model: Booking,
        as: 'bookings'
      }]
    })
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const guest = await Guest.findByPk(id)
    res.send(guest)
  }

  async update (req, res, next) {
    const id = req.params.id

    const {
      name,
      last_name: lastName,
      phone,
      address,
      country,
      zip_code: zipCode,
      birth_date: birthDate,
      email,
      password,
      card_number: cardNumber,
      card_type: cardType
    } = req.body

    // TODO: Agregar validaciones
    if (!name) res.status(400).send({ message: 'Nombre es requerido' })

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)

    const updateResult = await Guest.update(
      {
        name,
        last_name: lastName,
        phone,
        address,
        country,
        zip_code: zipCode,
        birth_date: birthDate,
        email,
        card_number: cardNumber,
        card_type: cardType,
        password: hash
      },
      {
        where: {
          guest_id: id
        }
      }
    )

    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      name,
      last_name: lastName,
      phone,
      address,
      country,
      zip_code: zipCode,
      birth_date: birthDate,
      email,
      password,
      card_number: cardNumber,
      card_type: cardType
    } = req.body

    // TODO: Agregar validaciones
    if (!name) return res.status(400).send({ message: 'Nombre es requerido' })

    try {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(password, salt)

      const guest = await Guest.create({
        name,
        last_name: lastName,
        phone,
        address,
        country,
        zip_code: zipCode,
        birth_date: birthDate,
        email,
        card_number: cardNumber,
        card_type: cardType,
        password: hash
      })
      res.status(201).send(guest)
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).send({ message: 'Ya esxiste un usuario con este correo electrónico' })
      } else if (error.name === 'SequelizeDatabaseError') {
        res.status(400).send({ message: 'Tipo de identificación debe ser: Cédula, Pasaporte o Cédula RUC' })
      }
    }
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Guest.destroy({
      where: {
        guest_id: id
      }
    })

    // TODO: Agregar validaciones.
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
