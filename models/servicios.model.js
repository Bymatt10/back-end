const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Servicios = connection.sequelize.define(
  'Servicios',
  {
    idservicio: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    servicio: Sequelize.STRING,
    precio: Sequelize.INTEGER,
    img: Sequelize.STRING,
    descripcion: Sequelize.STRING
  },
  {
    tableName: 'servicios',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Servicios
