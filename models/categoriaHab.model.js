const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Categoria = connection.sequelize.define(
  'Categoria',
  {
    idcategoriaHab: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    img: Sequelize.STRING,
    titulo: Sequelize.STRING,
    capacidad: Sequelize.STRING,
    descricion: Sequelize.STRING
  },
  {
    tableName: 'categoriahabitacion',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Categoria
