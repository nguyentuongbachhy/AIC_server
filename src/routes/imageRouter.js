import express from 'express'
import * as imageController from '../controllers/imageController'

const router = express.Router()

router.get('/get-and-count-images', imageController.getImagesController)
router.get('/get-image-by-folders', imageController.getImagesByFolders)
router.get('/get-adjacent', imageController.getAdjacentImagesController)

export default router