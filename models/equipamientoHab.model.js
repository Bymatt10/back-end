const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const EquipamientoHab = connection.sequelize.define(
  'EquipamientoHab',
  {
    idequipamiento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mesas: Sequelize.INTEGER,
    camas: Sequelize.INTEGER,
    televisores: Sequelize.INTEGER,
    sofas: Sequelize.INTEGER,
    neveras: Sequelize.BOOLEAN,
    baños: Sequelize.INTEGER,
    aireacondicionado: Sequelize.BOOLEAN,
    internet: Sequelize.BOOLEAN,
    ropero: Sequelize.INTEGER
  },
  {
    tableName: 'equipamiento',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = EquipamientoHab
