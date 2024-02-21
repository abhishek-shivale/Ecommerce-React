import express from "express";
import {
  AddProduct,
  getAllProduct,
  updateProduct,
} from "../controller/ProductController.js";

const productRouter = express.Router();

productRouter.route("/").get(getAllProduct);

productRouter.route("/addproduct").post(AddProduct);

productRouter.route("/updateproduct").put(updateProduct);

export default productRouter;
