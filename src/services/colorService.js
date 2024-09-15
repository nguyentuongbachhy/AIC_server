import db from '../models'

export const getAllColorsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Color.findAll({
            attributes: ['id', 'color_code'],
            raw: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getImagesByColorsService = (id, offset, limit) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Image_feature.findAndCountAll({
            attributes: ['id', 'folder_id', 'child_folder_id', 'id_frame', 'image_path', 'frame_mapping_index'],
            include: [{
                model: db.Image_color,
                as: 'imageColor',
                where: {
                    color_id: id
                },
                attributes: [],
            }],
            raw: true,
            offset: +offset,
            limit: +limit,
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})