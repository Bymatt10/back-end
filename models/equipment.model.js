const Connection = require('./connection')
const Feature = require('./feature.model')
const Room = require('./room.model')
const Sequelize = require('sequelize')

const connection = new Connection()
const Equipment = connection.sequelize.define(
  'Equipment',
  {
    equipment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    room_id: {
      type: Sequelize.STRING,
      references: {
        model: Room,
        key: 'room_id'
      }
    },
    feature_id: {
      type: Sequelize.STRING,
      references: {
        model: Feature,
        key: 'feature_id'
      }
    }
  },
  {
    tableName: 'equipment',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Equipment
