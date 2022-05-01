const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const MetodoPago = connection.sequelize.define(
  'MetodoPago',
  {
    idmetodo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombreTarjeta: Sequelize.STRING,
    numeroTarjeta: Sequelize.STRING,
    fechaVence: Sequelize.DATE,
    cvc: Sequelize.INTEGER,
    tipoTarjeta: Sequelize.STRING,
    idusuarios: Sequelize.INTEGER
  },
  {
    tableName: 'metodopago',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = MetodoPago
