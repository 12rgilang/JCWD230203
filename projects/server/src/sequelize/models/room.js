'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({property, room_image, event, transactions, room_connector}) {
      this.belongsTo(property, {foreignKey: 'property_id'})
      this.hasMany(room_image, {foreignKey: 'room_id'})
      this.hasMany(event, {foreignKey: 'room_id'})
      this.hasMany(transactions, {foreignKey: 'room_id'})
      this.hasMany(room_connector, {foreignKey: "room_id"})
    }
  }
  room.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:  {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    available_room: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_rates_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'room',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
  });
  return room;
};