const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Ciudad = connection.sequelize.define(
  'Ciudad',
  {
    idCiudad: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: Sequelize.STRING,
    idPais: Sequelize.INTEGER
  },
  {
    tableName: 'ciudad',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Ciudad
