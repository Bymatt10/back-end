const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const ReservaEstado = connection.sequelize.define(
  'ReservaEstado',
  {
    idreserva: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: Sequelize.BOOLEAN
  },
  {
    tableName: 'reserva',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = ReservaEstado
