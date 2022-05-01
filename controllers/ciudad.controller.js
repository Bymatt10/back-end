const Ciudad = require('../models/ciudad.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await Ciudad.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const ciudad = await Ciudad.findByPk(id)
    res.send(ciudad)
  }

  async update (req, res, next) {
    const id = req.params.id
    const { nombre, idPais } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!nombre) return res.status(400).send({ message: 'Nombre es requerido' })
    if (!idPais) return res.status(400).send({ message: 'Pais es requerido' })
    const Ciudades = await Ciudad.update(
      {
        nombre,
        idPais
      },
      {
        where: {
          idCiudad: id
        }
      }
    )
    res.status(204).send(Ciudades)
  }

  async create (req, res, next) {
    const { nombre, idPais } = req.body
    if (!nombre) return res.status(400).send({ message: 'Nombre es requerido' })
    if (!idPais) return res.status(400).send({ message: 'Pais es requerido' })
    const Ciudades = await Ciudad.create({
      nombre,
      idPais
    })
    res.status(201).send(Ciudades)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Ciudad.destroy({
      where: {
        idCiudad: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
