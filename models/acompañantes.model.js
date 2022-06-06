const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Compas = connection.sequelize.define(
  'Compas',
  {
    idAcompañante: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: Sequelize.STRING,
    Edad: Sequelize.NUMBER,
    Identificacion: Sequelize.STRING,
    Telefono: Sequelize.STRING,
    idusuario: Sequelize.NUMBER
  },
  {
    tableName: 'acompañantes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Compas
