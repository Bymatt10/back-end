const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Rol = connection.sequelize.define(
  'Rol',
  {
    idrRol: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombreRol: Sequelize.STRING,
    estado: Sequelize.BOOLEAN
  },
  {
    tableName: 'rol',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Rol
