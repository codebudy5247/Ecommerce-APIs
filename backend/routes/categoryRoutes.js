import express from "express";
const router = express.Router();

import {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} from "../controllers/categoryController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

import shortid from "shortid";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/create",
  protect,
  admin,
  upload.single("categoryImage"),
  addCategory
);
router.get("/getcategory", getCategories);
router.post(
  "/update",
  protect,
  admin,
  upload.array("categoryImage"),
  updateCategories
);
router.post(
  "/delete",
  protect,
  admin,
  deleteCategories
);

export default router
