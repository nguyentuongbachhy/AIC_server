import { Op } from 'sequelize'
import db from '../models'


export const getImagesService = (offset, limit) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAndCountAll({
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true,
            offset: +offset,
            limit: +limit,
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getImageFollowingFolder = (folder_id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAll({
            where: {
                folder_id
            },
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getImageFollowingFolderAndSubFolder = (folder_id, subfolder_id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAll({
            where: {
                folder_id,
                child_folder_id: subfolder_id,
            },
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getImageFollowingFolderAndSubFolderAndLeft = (folder_id, subfolder_id, left) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAll({
            where: {
                folder_id,
                child_folder_id: subfolder_id,
                id_frame: {
                    [Op.gte]: left,
                }
            },
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getImageFollowingFolderAndSubFolderAndRight = (folder_id, subfolder_id, right) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAll({
            where: {
                folder_id,
                child_folder_id: subfolder_id,
                id_frame: {
                    [Op.lte]: right
                }
            },
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getImageFollowingFolderAndSubFolderAndLeftRight = (folder_id, subfolder_id, left, right) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAll({
            where: {
                folder_id,
                child_folder_id: subfolder_id,
                id_frame: {
                    [Op.gte]: left,
                    [Op.lte]: right
                }
            },
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getAdjacentImages = (image_id) => new Promise(async (resolve, reject) => {
    try {
        image_id = +image_id;
        const response = await db.Image_feature.findAll({
            where: {
                id: {
                    [Op.gte]: image_id - 4,
                    [Op.lte]: image_id + 4
                }
            },
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            raw: true
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});