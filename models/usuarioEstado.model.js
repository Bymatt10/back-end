const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const UsuarioEst = connection.sequelize.define(
  'UsuarioEst',
  {
    idUsuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: Sequelize.BOOLEAN
  },
  {
    tableName: 'usuario',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = UsuarioEst
