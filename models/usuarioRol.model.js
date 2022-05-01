const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const UsuarioRol = connection.sequelize.define(
  'UsuarioRol',
  {
    idUsuarioRol: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: Sequelize.BOOLEAN,
    trabajador: Sequelize.BOOLEAN,
    cliente: Sequelize.BOOLEAN,
    idRol: Sequelize.INTEGER,
    idUsuario: Sequelize.INTEGER
  },
  {
    tableName: 'usuariorol',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = UsuarioRol
