const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const CheckOut = connection.sequelize.define(
  'CheckOut',
  {
    check_out_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: Sequelize.INTEGER,
    check_out_date: Sequelize.DATE
  },
  {
    tableName: 'check_outs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = CheckOut
