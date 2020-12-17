const express = require("express");
const products = require("./data/products");

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

app.listen(5000, console.log("Server running on port 5000"));
