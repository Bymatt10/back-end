const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Entidad = connection.sequelize.define(
  'Entidad',
  {
    idEntidad: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    primerNombre: Sequelize.STRING,
    segundoNombre: Sequelize.STRING,
    primerApellido: Sequelize.STRING,
    segundoApellido: Sequelize.STRING,
    fechaNacimiento: Sequelize.DATE,
    genero: Sequelize.CHAR,
    telefono: Sequelize.STRING,
    celular: Sequelize.STRING,
    correo: Sequelize.STRING,
    direccion: Sequelize.STRING,
    identificacion: Sequelize.STRING,
    tipoIdentificacion: Sequelize.STRING,
    razonSocial: Sequelize.STRING,
    siglas: Sequelize.STRING,
    ruc: Sequelize.STRING,
    codigoPostal: Sequelize.STRING,
    idPais: Sequelize.INTEGER,
    idCiudad: Sequelize.INTEGER,
    idActividad: Sequelize.INTEGER,
    idTipoPersona: Sequelize.INTEGER
  },
  {
    tableName: 'entidad',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Entidad
