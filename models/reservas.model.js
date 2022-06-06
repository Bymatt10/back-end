const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Reserva = connection.sequelize.define(
  'Reserva',
  {
    idreserva: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fechaEntrada: Sequelize.DATE,
    fechaSalida: Sequelize.DATE,
    estado: Sequelize.NUMBER,
    cantPersonas: Sequelize.INTEGER,
    idservicio: Sequelize.INTEGER,
    idhabitacion: Sequelize.INTEGER,
    idusuario: Sequelize.INTEGER,
    idcategoriaHab: Sequelize.INTEGER
  },
  {
    tableName: 'reserva',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Reserva
