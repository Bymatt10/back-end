const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Category = connection.sequelize.define(
  'Category',
  {
    category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    guest_total: Sequelize.INTEGER,
    price: Sequelize.DECIMAL
  },
  {
    tableName: 'categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Category
