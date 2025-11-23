import FoodCategory from "../models/foodCategory.js";

export const categoryService = async (name,image) => {
  const existingCategory = await FoodCategory.findOne({ name });
  if (existingCategory) {
    throw new Error("category already exists");
  }

  const newCategory = new FoodCategory({ name, image });
  return await newCategory.save();
};