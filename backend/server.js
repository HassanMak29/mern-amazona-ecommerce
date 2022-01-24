/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB =
  "mongodb+srv://hassan:test1234@cluster0.web3m.mongodb.net/amazona?retryWrites=true&w=majority";

// const DB1 = "mongodb://localhost/amazona";

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URL || DB);

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((prod) => prod._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
