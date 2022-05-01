const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const ActividadJuridica = connection.sequelize.define(
  'ActividadJuridica',
  {
    idactividad: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    actividad: Sequelize.STRING,
    descripcion: Sequelize.STRING
  },
  {
    tableName: 'actividadjuridica',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = ActividadJuridica
