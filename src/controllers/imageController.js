import * as imageService from '../services/imageService'

export const getImagesController = async (req, res) => {
    try {
        const { offset, limit } = req.query
        if (!offset || !limit)
            return res.status(400).json("Missing input")

        const response = await imageService.getImagesService(offset, limit)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getImagesByFolders = async (req, res) => {
    try {
        const { folder_id, subfolder_id, left, right } = req.query
        let response
        if (subfolder_id) {
            if (!!left && !!right) {
                response = await imageService.getImageFollowingFolderAndSubFolderAndLeftRight(folder_id, subfolder_id, left, right)
            } else if (!left && !right) {
                response = await imageService.getImageFollowingFolderAndSubFolder(folder_id, subfolder_id)
            } else if (!left) {
                response = await imageService.getImageFollowingFolderAndSubFolderAndRight(folder_id, subfolder_id, right)
            } else {
                response = await imageService.getImageFollowingFolderAndSubFolderAndLeft(folder_id, subfolder_id, left)
            }
        }
        else {
            response = await imageService.getImageFollowingFolder(folder_id)
        }

        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getAdjacentImagesController = async (req, res) => {
    try {
        const { image_id } = req.query
        if (!image_id) {
            return res.status(400).json("Missing image_id")
        }
        console.log(image_id);
        const response = await imageService.getAdjacentImages(image_id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error)
    }
}