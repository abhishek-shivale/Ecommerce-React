import asyncHandler from "../middlewares/asyncHandler.js";
import { v4 as uuidv4 } from "uuid";
import productModel from "../models/productModel.js";

export const getAllProduct = asyncHandler(async (req, res, next) => {
  const products = await productModel.find({});

  res.status(200).json({
    success: true,
    message: "all products",
    products,
  });
});

export const AddProduct = asyncHandler(async (req, res, next) => {
  const {
    name,
    price,
    rating,
    reviewCount,
    imageSrc,
    imageAlt,
    colors,
    sizes,
  } = req.body;

  if (
    !name ||
    !price ||
    !rating ||
    !reviewCount ||
    !imageSrc ||
    !imageAlt ||
    !colors ||
    !sizes
  ) {
    return res.status(411).json({
      success: false,
      message: "Missssing Something",
    });
  }
  console.log(sizes);

  const product = await productModel.create({
    id: uuidv4(),
    name: name,
    price: price,
    rating: rating,
    reviewCount: reviewCount,
    imageSrc: imageSrc,
    imageAlt: imageAlt,
    colors: colors,
    sizes: sizes,
  });

  const resProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    rating: product.rating,
    reviewCount: product.reviewCount,
    imageSrc: product.imageSrc,
    imageAlt: product.imageAlt,
    colors: product.colors,
    sizes: product.sizes,
  };

  res.status(200).json({
    success: true,
    message: "New product has added",
    product: resProduct,
  });
});

export const updateProduct = asyncHandler(async (req, res, next) => {
  const id = req.query.productid;
  if (!id) {
    return res.status(411).json({
      success: false,
      message: "Product id is missing",
    });
  }

  const product = await productModel.findOne({ id: id });

  if (!product) {
    return res.status(411).json({
      success: false,
      message: "Product is missing",
    });
  }

  const {
    name,
    price,
    rating,
    reviewCount,
    imageSrc,
    imageAlt,
    colors,
    sizes,
  } = req.body;

  if (
    !name &&
    !price &&
    !rating &&
    !reviewCount &&
    !imageSrc &&
    !imageAlt &&
    !colors &&
    !sizes
  ) {

    return res.status(411).json({
      success: false,
      message: "Missssing Something",
    });
  }

  const productArray = {
    name,
    price,
    rating,
    reviewCount,
    imageSrc,
    imageAlt,
    colors,
    sizes,
  };

  for (const key in productArray) {
    if (
      productArray[key] !== undefined &&
      productArray[key] !== null &&
      productArray[key] !== ""
    ) {
      product[key] = productArray[key];
    }
  }

  await product.save();

  res.status(200).json({
    success: true,
    message: "Product is updated",
  });
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const id = req.query.productid;
  if (!id) {
    res.status(411).json({
      success: false,
      message: "Product id is missing",
    });
  }

  const product = await productModel.findOne({id:id})

    if (!product) {
      return res.status(411).json({
        success: false,
        message: "Product is missing",
      });
    }

    await productModel.deleteOne({_id:product._id})

})

export const SearchProduct = asyncHandler(async(req,res,next)=>{
})