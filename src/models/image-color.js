'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image_color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Image_color.belongsTo(models.Image_feature, {
                foreignKey: 'image_id',
                targetKey: 'id',
                as: 'imageColor'
            })
        }
    }
    Image_color.init({
        image_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        color_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Image_color',
        tableName: 'Image_colors',
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['image_id', 'color_id']
            }
        ]

    });
    return Image_color;
};