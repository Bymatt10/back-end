const UsuarioRol = require('../models/usuarioRol.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await UsuarioRol.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const usuarioRol = await UsuarioRol.findAll(
      {
        where: {
          IdUsuario: id
        }
      }
    )
    res.send(usuarioRol)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      estado,
      trabajador,
      cliente,
      idRol,
      idUsuario
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!estado) return res.status(400).send({ message: 'Estado es requerido' })
    if (!trabajador) return res.status(400).send({ message: 'Trabajador es requerido' })
    if (!cliente) return res.status(400).send({ message: 'cliente es requerido' })
    if (!idRol) return res.status(400).send({ message: 'Rol es requerido' })
    if (!idUsuario) return res.status(400).send({ message: 'Usuario es requerido' })
    const usuariorol = await UsuarioRol.update(
      {
        estado,
        trabajador,
        cliente,
        idRol,
        idUsuario
      },
      {
        where: {
          idUsuarioRol: id
        }
      }
    )
    res.status(204).send(usuariorol)
  }

  async create (req, res, next) {
    const {
      estado,
      trabajador,
      cliente,
      idRol,
      idUsuario
    } = req.body
    if (!estado) return res.status(400).send({ message: 'Estado es requerido' })
    if (!trabajador) return res.status(400).send({ message: 'Trabajador es requerido' })
    if (!cliente) return res.status(400).send({ message: 'cliente es requerido' })
    if (!idRol) return res.status(400).send({ message: 'Rol es requerido' })
    if (!idUsuario) return res.status(400).send({ message: 'Usuario es requerido' })
    const usuariorol = await UsuarioRol.create({
      estado,
      trabajador,
      cliente,
      idRol,
      idUsuario
    })
    res.status(201).send(usuariorol)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await UsuarioRol.destroy({
      where: {
        idUsuarioRol: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
