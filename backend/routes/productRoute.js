import express from "express";
import {
  AddProduct,
  SearchProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controller/ProductController.js";

const productRouter = express.Router();

productRouter.route("/").get(getAllProduct);

productRouter.route("/addproduct").post(AddProduct);

productRouter.route("/updateproduct").put(updateProduct);

productRouter.route("/deleteproduct").delete(deleteProduct);

productRouter.route('/sort').get(SearchProduct)


export default productRouter;
