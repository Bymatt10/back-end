const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const TipoPersona = connection.sequelize.define(
  'TipoPersona',
  {
    idTipoPersona: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING
  },
  {
    tableName: 'tipopersona',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = TipoPersona
