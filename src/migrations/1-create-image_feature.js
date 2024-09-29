'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Image_features', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      folder_id: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      child_folder_id: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      id_frame: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image_path: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      frame_mapping_index: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vector_features: {
        type: Sequelize.BLOB,
        allowNull: false
      }
    });

    await queryInterface.addConstraint('Image_features', {
      fields: ['folder_id', 'child_folder_id', 'id_frame'],
      type: 'unique',
      name: 'unique_image_features_folder_child_frame'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Image_features');
  }
};
