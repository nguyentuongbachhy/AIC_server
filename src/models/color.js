'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Color.init({
        color_code: DataTypes.STRING(6)
    }, {
        sequelize,
        modelName: 'Color',
        tableName: 'Colors',
        timestamps: false,
    });
    return Color;
};