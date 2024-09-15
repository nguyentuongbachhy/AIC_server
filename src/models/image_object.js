'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image_object extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image_object.belongsTo(models.Image_feature, {
        foreignKey: 'image_id',
        targetKey: 'id',
        as: 'imageObject'
      }),
        Image_object.belongsTo(models.Object, {
          foreignKey: 'object_id',
          targetKey: 'id',
          as: 'object'
        })
    }
  }
  Image_object.init({
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    object_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    object_count: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Image_object',
    tableName: 'Image_objects',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['image_id', 'object_id']
      }
    ]

  });
  return Image_object;
};