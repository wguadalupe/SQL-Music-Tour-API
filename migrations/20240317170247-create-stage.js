'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      event_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, // Consider if this should be not nullable and if it should have a reference to the events table
        references: {
          model: 'events', // Name of the referenced table
          key: 'id', // Key in the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Choose a strategy that fits your data integrity needs
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
    await queryInterface.dropTable('stage');
  }
};
