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