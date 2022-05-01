const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Guest = connection.sequelize.define(
  'Guest',
  {
    guest_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    country: Sequelize.STRING,
    zip_code: Sequelize.STRING,
    birth_date: Sequelize.DATE,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    card_number: Sequelize.STRING,
    card_type: Sequelize.STRING
  },
  {
    tableName: 'guests',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Guest
