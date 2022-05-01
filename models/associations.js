const Booking = require('./booking.model')
const Category = require('./category.model')
const Equipment = require('../models/equipment.model')
const Feature = require('../models/feature.model')
const Image = require('../models/image.model')
const Room = require('./room.model')
const Guest = require('./guest.model')
const CheckIn = require('./check-in.model')
const CheckOut = require('./check-out.model')
const Pais = require('./pais.model')
const Ciudad = require('./ciudad.model')
const Entidad = require('./entidad.model')

const associations = () => {
  return new Promise((resolve, reject) => {
    try {
      // Un habitación tiene una categoría, a su vez una categoria puede tener muchas habitaciones.
      Category.hasMany(Room, { foreignKey: 'category_id', as: 'rooms' })
      Room.belongsTo(Category, { foreignKey: 'category_id', as: 'category' })

      // Un habitación tiene muchas imágenes, a su vez una imagen pertece a una habitación.
      Room.hasMany(Image, { foreignKey: 'room_id', as: 'images' })
      Image.belongsTo(Room, { foreignKey: 'room_id', as: 'room' })

      // Una habitación tiene muchos artículos, a su vez un artículo puede existir en muchas habitaciones.
      Room.belongsToMany(Feature, { through: Equipment, foreignKey: 'room_id', as: 'features' })
      Feature.belongsToMany(Room, { through: Equipment, foreignKey: 'feature_id', as: 'rooms' })

      // Una habitación tiene muchas reservaciones, a su vez una reserva pertenece a una habitación.
      Room.hasMany(Booking, { foreignKey: 'room_id', as: 'bookings' })
      Booking.belongsTo(Room, { foreignKey: 'room_id', as: 'room' })

      // Un huésped tiene muchas reservaciones, a su vez una reserva pertenece a un huésped.
      Guest.hasMany(Booking, { foreignKey: 'guest_id', as: 'bookings' })
      Booking.belongsTo(Guest, { foreignKey: 'guest_id', as: 'guest' })

      // Una reserva tiene una entrada, a su vez una entrada pertenece a una reserva.
      Booking.hasOne(CheckIn, { foreignKey: 'booking_id', as: 'check_in' })
      CheckIn.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' })

      // Una reserva tiene una salida, a su vez una salida pertenece a una reserva.
      Booking.hasOne(CheckOut, { foreignKey: 'booking_id', as: 'check_out' })
      CheckOut.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' })

      // *********Nuevos requerimientos del hotel.**********

      // Un pais puede tener una cuidad para la entidad.
      Pais.hasMany(Ciudad, { foreignKey: 'idPais', as: 'ciudad' })
      Ciudad.belongsTo(Pais, { foreignKey: 'idPais', as: 'pais' })

      // una entidad puede tener un pais.
      Pais.hasMany(Entidad, { foreignKey: 'idPais', as: 'entidad' })
      Entidad.belongsTo(Pais, { foreignKey: 'idPais', as: 'pais' })

      // una entidad puede tener un pais.
      Ciudad.hasMany(Entidad, { foreignKey: 'idCiudad', as: 'entidad' })
      Entidad.belongsTo(Ciudad, { foreignKey: 'idCiudad', as: 'ciudad' })

      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  associations
}
