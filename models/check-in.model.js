const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const CheckIn = connection.sequelize.define(
  'CheckIn',
  {
    check_in_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: Sequelize.INTEGER,
    check_in_date: Sequelize.DATE
  },
  {
    tableName: 'check_ins',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = CheckIn
