'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band }) {
      // MeetGreet belongs to Band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      });
    }
  }
  
  MeetGreet.init({
      meetGreet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MeetGreet', 
  });
  return MeetGreet;
};
