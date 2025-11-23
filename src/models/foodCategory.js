import mongoose from "mongoose";

const foodcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);


export default mongoose.model("FoodCategory", foodcategorySchema);
