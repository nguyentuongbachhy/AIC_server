import db from '../models'


export const getDropdownService = () => new Promise(async (resolve, reject) => {
    try {
        const rows = await db.Image_feature.findAll({
            attributes: ['folder_id', 'child_folder_id'],
            group: ['folder_id', 'child_folder_id'],
            distinct: true,
            raw: true
        })

        let dict = {}
        for (const item of rows) {
            if (dict[item['folder_id']]) {
                dict[item['folder_id']].push(item['child_folder_id'])
            }
            else {
                dict[item['folder_id']] = [item['child_folder_id']]
            }
        }

        resolve(dict)
    } catch (error) {
        reject(error)
    }
})