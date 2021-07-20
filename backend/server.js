const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require('cors')
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");

const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");

dotenv.config();

connectDB();

const app = express();


app.use(express.json());
app.use(cors());

//Test Routes
app.get("/", async (req, res) => {
  res.json({ message: "API is running!" });
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/category", categoryRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`.yellow.bold
  )
);
