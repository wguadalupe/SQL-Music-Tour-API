'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet }) {
      // Defines a one-to-many relationship with MeetGreet
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      });
    }
  }

  Band.init({
   
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Band', 
  });

  return Band;
};
