import express from 'express';
import { getDropdownController } from "../controllers/dropdownController";

const router = express.Router()

router.get('/get-dropdown', getDropdownController)

export default router