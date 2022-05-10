
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Guest = require('../models/usuario.model')

module.exports = class AuthenticationController {
  async login (req, res) {
    const { correo, password } = req.body

    // Buscar huésped por email (el email es único)
    const guest = await Guest.findOne({
      where: {
        email: correo,
        trabajador: 1
      }
    })

    if (!guest) { return res.status(400).send({ message: 'Usuario incorrecto' }) }

    const match = await bcrypt.compare(password, guest.password)

    if (!match) { return res.status(400).send({ message: 'Contraseña incorrecta' }) }

    const token = jwt.sign({
      idUsuario: guest.idUsuario,
      idEntidad: guest.idEntidad
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    })

    res.cookie('authtoken', token, { secure: true, expiresIn: 24 * 60 * 60 })
    res.status(200).send({ token })
  }

  async validate (req, res, next) {
    const authorization = req.headers.authorization

    if (!authorization) return res.status(401).send({ message: 'No autorizado' })

    const [, token] = authorization.split('Bearer ')

    try {
      const valid = jwt.verify(token, process.env.JWT_SECRET)
      if (valid) {
        next()
      } else {
        res.status(401).send({ message: 'No autorizado' })
      }
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        res.status(401).send({ message: 'No autorizado' })
      }
    }
  }
}
