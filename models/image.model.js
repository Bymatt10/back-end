const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Image = connection.sequelize.define(
  'Image',
  {
    image_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    room_id: Sequelize.INTEGER,
    content: Sequelize.STRING
  },

  {
    tableName: 'images',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Image
