const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Booking = connection.sequelize.define(
  'Booking',
  {
    booking_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    guest_id: Sequelize.INTEGER,
    room_id: Sequelize.INTEGER,
    start_date: Sequelize.DATE,
    end_date: Sequelize.DATE,
    status: Sequelize.STRING
  },
  {
    tableName: 'booking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

module.exports = Booking
