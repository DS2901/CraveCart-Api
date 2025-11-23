import express from "express";
import authRoutes from "./authRoutes.js";
import categoryRoutes from "./foodCategories.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/category", categoryRoutes);

export default router;
