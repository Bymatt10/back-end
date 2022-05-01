const Entidad = require('../models/entidad.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await Entidad.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const entidad = await Entidad.findByPk(id)
    res.send(entidad)
  }

  async filtro (req, res, next) {
    const id = req.params.id
    const entidad = await Entidad.findAll(
      {
        where: {
          idEntidad: id
        }
      }
    )
    res.send(entidad)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      fechaNacimiento,
      genero,
      telefono,
      celular,
      correo,
      direccion,
      identificacion,
      tipoIdentificacion,
      razonSocial,
      siglas,
      ruc,
      codigoPostal,
      idPais,
      idCiudad,
      idActividad,
      idTipoPersona
    } = req.body
    if (!telefono) return res.status(400).send({ message: 'El telefono es requerido' })
    if (!correo) return res.status(400).send({ message: 'El correo es requerido' })
    if (!direccion) return res.status(400).send({ message: 'La dirección es requerida' })
    // forgen key
    if (!idPais) return res.status(400).send({ message: 'El Pais es requerido' })
    if (!idCiudad) return res.status(400).send({ message: 'La ciudad es requerida' })
    if (!idTipoPersona) return res.status(400).send({ message: 'El tipo de persona es requerida' })
    const entidad = await Entidad.update(
      {
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        fechaNacimiento,
        genero,
        telefono,
        celular,
        correo,
        direccion,
        identificacion,
        tipoIdentificacion,
        razonSocial,
        siglas,
        ruc,
        codigoPostal,
        idPais,
        idCiudad,
        idActividad,
        idTipoPersona
      },
      {
        where: {
          idEntidad: id
        }
      }
    )
    res.status(204).send(entidad)
  }

  async create (req, res, next) {
    const {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      fechaNacimiento,
      genero,
      telefono,
      celular,
      correo,
      direccion,
      identificacion,
      tipoIdentificacion,
      razonSocial,
      siglas,
      ruc,
      codigoPostal,
      idPais,
      idCiudad,
      idActividad,
      idTipoPersona
    } = req.body
    if (!telefono) return res.status(400).send({ message: 'El telefono es requerido' })
    if (!correo) return res.status(400).send({ message: 'El correo es requerido' })
    if (!direccion) return res.status(400).send({ message: 'La dirección es requerida' })
    // forgen key
    if (!idPais) return res.status(400).send({ message: 'El Pais es requerido' })
    if (!idCiudad) return res.status(400).send({ message: 'La ciudad es requerida' })
    if (!idTipoPersona) return res.status(400).send({ message: 'El tipo de persona es requerida' })
    const entidad = await Entidad.create({
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      fechaNacimiento,
      genero,
      telefono,
      celular,
      correo,
      direccion,
      identificacion,
      tipoIdentificacion,
      razonSocial,
      siglas,
      ruc,
      codigoPostal,
      idPais,
      idCiudad,
      idActividad,
      idTipoPersona
    })
    res.status(201).send(entidad)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Entidad.destroy({
      where: {
        idEntidad: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
