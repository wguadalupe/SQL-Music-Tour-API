'use strict';

// Importing Sequelize types to use in the function signatures
const { QueryInterface, Sequelize } = require("sequelize");

/**
 * @param {QueryInterface} queryInterface 
 * @param {Sequelize} Sequelize 
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bands', [
      { name: 'The Beatles', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Led Zeppelin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pink Floyd', createdAt: new Date(), updatedAt: new Date() },
      // Add more bands here
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // In the down method, you should remove the entries you added in the up method
    // This example will remove all entries, but you might adjust it to be more selective
    await queryInterface.bulkDelete('Bands', null, {});
  }
};
