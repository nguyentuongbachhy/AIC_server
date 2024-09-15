'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image_feature extends Model {
    static associate(models) {
      // define association here
      Image_feature.hasMany(models.Image_object, {
        foreignKey: 'image_id',
        as: 'imageObject'
      }),
        Image_feature.hasMany(models.Image_color, {
          foreignKey: 'image_id',
          as: 'imageColor'
        })
    }
  }
  Image_feature.init({
    folder_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    child_folder_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    id_frame: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    frame_mapping_index: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Image_feature',
    tableName: 'Image_features',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['folder_id', 'child_folder_id', 'id_frame']
      }
    ]
  });
  return Image_feature;
};
