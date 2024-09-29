import { getDropdownService } from "../services/dropdownService";

export const getDropdownController = async (req, res) => {
    try {
        const rows = await getDropdownService()
        return res.status(200).json(rows)
    } catch (error) {
        return res.status(500).json(error)
    }
}