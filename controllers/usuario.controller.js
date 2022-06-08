const bcrypt = require('bcrypt')
const Usuario = require('../models/usuario.model')
const UsuarioEst = require('../models/usuarioEstado.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await Usuario.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const usuario = await Usuario.findAll(
      {
        where: {
          email: id
        }
      }
    )
    res.send(usuario)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      nombre,
      email,
      password,
      estado,
      trabajador,
      idEntidad
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!nombre) return res.status(400).send({ message: 'Nombre es requerido' })
    if (!email) return res.status(400).send({ message: 'Correo es requerido' })
    if (!password) return res.status(400).send({ message: 'Contraseña es requerida' })
    if (!estado) return res.status(400).send({ message: 'El estado es requerido' })
    if (!idEntidad) return res.status(400).send({ message: 'La entidad es requerida' })
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const usuario = await Usuario.update(
      {
        nombre,
        email,
        password: hash,
        estado,
        trabajador,
        idEntidad
      },
      {
        where: {
          idUsuario: id
        }
      }
    )
    res.status(204).send(usuario)
  }

  async create (req, res, next) {
    const {
      nombre,
      email,
      password,
      estado,
      trabajador,
      idEntidad
    } = req.body
    if (!nombre) return res.status(400).send({ message: 'Nombre es requerido' })
    if (!email) return res.status(400).send({ message: 'Correo es requerido' })
    if (!password) return res.status(400).send({ message: 'Contraseña es requerida' })
    if (!estado) return res.status(400).send({ message: 'El estado es requerido' })
    if (!idEntidad) return res.status(400).send({ message: 'La entidad es requerida' })
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const usuario = await Usuario.create({
      nombre,
      email,
      password: hash,
      estado,
      trabajador,
      idEntidad
    })
    res.status(201).send(usuario)
  }

  async delete (req, res, next) {
    const id = req.params.id
    const {
      estado
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    const destroyResult = await UsuarioEst.update(
      {
        estado
      },
      {
        where: {
          idUsuario: id
        }
      }
    )
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
