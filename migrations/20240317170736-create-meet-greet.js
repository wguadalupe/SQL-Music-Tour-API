'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meetGreets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      meetGreet_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      available_start_time: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meetGreets');
  }
};
