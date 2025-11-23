import express from "express";
import { createCategory } from "../controllers/categoryController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/createCategory",upload.single("image"), createCategory);

export default router;
