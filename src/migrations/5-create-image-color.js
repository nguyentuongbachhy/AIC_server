'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Image_colors', {
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
            color_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
        });

        await queryInterface.addConstraint('Image_colors', {
            fields: ['image_id', 'color_id'],
            type: 'unique',
            name: 'unique_image_colors_folder_child_frame_color'
        });

        await queryInterface.addConstraint('Image_colors', {
            fields: ['color_id'],
            type: 'foreign key',
            name: 'fk_image_colors_color_id',
            references: {
                table: 'Colors',
                field: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('Image_colors', 'fk_image_colors_color_id');
        await queryInterface.dropTable('Image_colors');
    }
};
