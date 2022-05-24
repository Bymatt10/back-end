const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const HabitacionEstado = connection.sequelize.define(
  'HabitacionEstado',
  {
    idhabitacion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: Sequelize.STRING
  },
  {
    tableName: 'habitaciones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = HabitacionEstado
