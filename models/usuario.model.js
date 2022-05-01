const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Usuario = connection.sequelize.define(
  'Usuario',
  {
    idUsuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    estado: Sequelize.BOOLEAN,
    idEntidad: Sequelize.INTEGER
  },
  {
    tableName: 'usuario',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Usuario
