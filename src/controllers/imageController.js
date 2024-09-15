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