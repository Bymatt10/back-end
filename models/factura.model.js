const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Factura = connection.sequelize.define(
  'Factura',
  {
    idFactura: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idusuario: Sequelize.INTEGER,
    idmetodopago: Sequelize.INTEGER,
    idreserva: Sequelize.INTEGER,
    idservicio: Sequelize.INTEGER,
    iva: Sequelize.FLOAT,
    pago: Sequelize.FLOAT,
    descuento: Sequelize.FLOAT,
    totalpago: Sequelize.FLOAT
  },
  {
    tableName: 'factura',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Factura
