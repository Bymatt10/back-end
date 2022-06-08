const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const UsuarioRolEstad = connection.sequelize.define(
  'UsuarioRolEstad',
  {
    idUsuarioRol: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: Sequelize.BOOLEAN
  },
  {
    tableName: 'usuariorol',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = UsuarioRolEstad
