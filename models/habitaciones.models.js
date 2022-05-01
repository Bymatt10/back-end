const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Habitacion = connection.sequelize.define(
  'Habitacion',
  {
    idhabitacion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: Sequelize.STRING,
    estado: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    img: Sequelize.STRING,
    precio: Sequelize.INTEGER,
    idequipamiento: Sequelize.INTEGER,
    idcategoriaHab: Sequelize.INTEGER
  },
  {
    tableName: 'habitaciones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Habitacion
