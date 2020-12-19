import express from "express";
const router = express.Router();
import { authUser, registerUser } from "../controllers/userController.js";
import { auth } from "../middleware/authMiddleware.js";



// Register a new user - POST /api/users
router.route('/').post(registerUser)
//Fetch all products GET/api/products
router.post("/login", authUser);
//Get user profile - GET/api/users/profile {Private}
//router.route("/profile").get(auth, getUserProfile);

export default router;
