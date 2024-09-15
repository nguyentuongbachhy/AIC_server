import express from 'express';
import * as colorController from '../controllers/colorController';


const router = express.Router()

router.get('/get-all-colors', colorController.getAllColorsController)

router.get('/get-and-count-images', colorController.getAndCountImagesByColorsController)

export default router