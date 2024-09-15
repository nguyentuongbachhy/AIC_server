import express from 'express'
import * as imageController from '../controllers/imageController'

const router = express.Router()

router.get('/get-and-count-images', imageController.getImagesController)

export default router