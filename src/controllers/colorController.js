import * as colorService from '../services/colorService'

export const getAllColorsController = async (req, res) => {
    try {
        const response = await colorService.getAllColorsService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getAndCountImagesByColorsController = async (req, res) => {
    try {
        const { colorId, offset, limit } = req.query
        if (!offset || !limit)
            return res.status(400).json("Missing input")

        const response = await colorService.getImagesByColorsService(colorId, offset, limit)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json(error)
    }
}