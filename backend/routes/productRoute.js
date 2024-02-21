import express from 'express'
import { AddProduct, getAllProduct } from '../controller/ProductController.js'

const productRouter = express.Router()


productRouter.route("/").get(getAllProduct);

productRouter.route("/addproduct").post(AddProduct);

export default productRouter