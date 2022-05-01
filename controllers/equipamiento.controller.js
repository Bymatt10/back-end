const Equipamiento = require('../models/equipamientoHab.model')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await Equipamiento.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const equipamiento = await Equipamiento.findByPk(id)
    res.send(equipamiento)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      mesas,
      camas,
      televisores,
      sofas,
      neveras,
      baños,
      aireacondicionado,
      internet,
      ropero
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!mesas) return res.status(400).send({ message: 'Las mesas son requeridas' })
    if (!camas) return res.status(400).send({ message: 'Las camas son requeridas' })
    if (!televisores) return res.status(400).send({ message: 'Los televisores son requeridos' })
    if (!sofas) return res.status(400).send({ message: 'Los sofas son requeridos' })
    if (!neveras) return res.status(400).send({ message: 'Las neveras son requeridas' })
    if (!baños) return res.status(400).send({ message: 'Los baños son requeridos' })
    if (!internet) return res.status(400).send({ message: 'El internet es requerido' })
    if (!ropero) return res.status(400).send({ message: 'El ropero es requerido' })
    const equipamiento = await Equipamiento.update(
      {
        mesas,
        camas,
        televisores,
        sofas,
        neveras,
        baños,
        aireacondicionado,
        internet,
        ropero
      },
      {
        where: {
          idequipamiento: id
        }
      }
    )
    res.status(204).send(equipamiento)
  }

  async create (req, res, next) {
    const {
      mesas,
      camas,
      televisores,
      sofas,
      neveras,
      baños,
      aireacondicionado,
      internet,
      ropero
    } = req.body
    if (!mesas) return res.status(400).send({ message: 'Las mesas son requeridas' })
    if (!camas) return res.status(400).send({ message: 'Las camas son requeridas' })
    if (!televisores) return res.status(400).send({ message: 'Los televisores son requeridos' })
    if (!sofas) return res.status(400).send({ message: 'Los sofas son requeridos' })
    if (!neveras) return res.status(400).send({ message: 'Las neveras son requeridas' })
    if (!baños) return res.status(400).send({ message: 'Los baños son requeridos' })
    if (!internet) return res.status(400).send({ message: 'El internet es requerido' })
    if (!ropero) return res.status(400).send({ message: 'El ropero es requerido' })
    const equipamiento = await Equipamiento.create({
      mesas,
      camas,
      televisores,
      sofas,
      neveras,
      baños,
      aireacondicionado,
      internet,
      ropero
    })
    res.status(201).send(equipamiento)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Equipamiento.destroy({
      where: {
        idequipamiento: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
