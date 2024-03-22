module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bands', {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER 
      },
      name: {
        type: Sequelize.DataTypes.STRING, 
        allowNull: false,
      },
      genre: {
        type: Sequelize.DataTypes.TEXT, 
        allowNull: false,
      },
      available_start_time: {
        type: Sequelize.DataTypes.DATE, 
        allowNull: false,
      },
      end_time: {
        type: Sequelize.DataTypes.DATE, 
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bands');
  }
};
