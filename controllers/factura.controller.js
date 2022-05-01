const Factura = require('../models/factura.model')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await Factura.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const factura = await Factura.findAll(
      {
        where: {
          idusuario: id
        }
      }
    )
    res.send(factura)
  }

  async create (req, res, next) {
    const {
      idusuario,
      idmetodopago,
      idreserva,
      idservicio,
      iva,
      pago,
      descuento,
      totalpago
    } = req.body
    if (!idusuario) return res.status(400).send({ message: 'El usuario es requerido' })
    if (!idmetodopago) return res.status(400).send({ message: 'El metodo de pago es requerido' })
    if (!iva) return res.status(400).send({ message: 'El iva es requerido' })
    if (!pago) return res.status(400).send({ message: 'EL pago es requerido' })
    if (!totalpago) return res.status(400).send({ message: 'EL total pagado es requerido' })
    const factura = await Factura.create({
      idusuario,
      idmetodopago,
      idreserva,
      idservicio,
      iva,
      pago,
      descuento,
      totalpago
    })
    res.status(201).send(factura)
  }
}
