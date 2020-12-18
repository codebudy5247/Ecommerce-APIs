import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

//bodyparser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (request, response) => {
  const productId = Number(request.params.id);
  const getProduct = products.find((p) => p._id === productId);

  if (!getProduct) {
    response.status(500).send("Product not found.");
  } else {
    response.json(getProduct);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
