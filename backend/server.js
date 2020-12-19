import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();


// app.use((req,res,next)=>{
//      console.log(req.originalUrl.green.bold)
//      next()
// })

//bodyparser
app.use(express.json());

//  middleware for consoling every request
app.use((req, res, next) => {
  console.log(`${req.method}`.green.inverse + `  ${req.originalUrl}`.dim);
  next();
})

app.get("/", (req, res) => {
  res.send("API is running...");
});

//Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//Middleware Error handling
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
