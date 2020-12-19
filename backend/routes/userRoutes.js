import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

//Fetch all products GET/api/products
router.post("/login", authUser);

//Fetch single product GET/api/products/:id

export default router;
