'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Colors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color_code: {
        type: Sequelize.STRING(6)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Colors');
  }
};
