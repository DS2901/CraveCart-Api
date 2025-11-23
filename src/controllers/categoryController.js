import { categoryService } from "../services/categoryService.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newCategory = await categoryService(name, image);

    res.status(201).json({
      message: "category created successfully",
      category: newCategory,
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
