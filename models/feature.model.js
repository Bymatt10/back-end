const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Feature = connection.sequelize.define(
  'Feature',
  {
    feature_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING
  },
  {
    tableName: 'features',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Feature
