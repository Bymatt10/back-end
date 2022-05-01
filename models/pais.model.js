const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Pais = connection.sequelize.define(
  'Pais',
  {
    idPais: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: Sequelize.STRING
  },
  {
    tableName: 'pais',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Pais
