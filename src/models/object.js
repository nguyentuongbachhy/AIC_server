'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Object extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Object.hasMany(models.Image_object, {
        foreignKey: 'object_id',
        as: 'object'
      })
    }
  }
  Object.init({
    label_name: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'Object',
    tableName: 'Objects',
    timestamps: false,
  });
  return Object;
};