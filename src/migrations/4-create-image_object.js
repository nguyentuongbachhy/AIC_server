'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Image_objects', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      image_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      object_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      object_count: {
        type: Sequelize.SMALLINT
      },
    });

    await queryInterface.addConstraint('Image_objects', {
      fields: ['image_id', 'object_id'],
      type: 'unique',
      name: 'unique_image_objects_folder_child_frame_object'
    });

    await queryInterface.addConstraint('Image_objects', {
      fields: ['object_id'],
      type: 'foreign key',
      name: 'fk_image_objects_object_id',
      references: {
        table: 'Objects',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Image_objects', 'fk_image_objects_object_id');
    await queryInterface.dropTable('Image_objects');
  }
};
