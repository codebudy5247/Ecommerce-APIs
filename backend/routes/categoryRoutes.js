const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  // updateCategories,
  // deleteCategories,
} = require("../controllers/categoryController.js");

const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").get(getCategories).post(protect, admin, createCategory);

// router
//   .route("/:id")
//   .delete(auth, authAdmin, categoryCtrl.deleteCategory)
//   .put(auth, authAdmin, categoryCtrl.updateCategory);

module.exports=router;
