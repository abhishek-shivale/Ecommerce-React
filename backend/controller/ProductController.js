import ProductModel from '../models/productModel.js'
import asyncHandler from '../middlewares/asyncHandler.js'
import productModel from '../models/productModel.js'

export const getAllProduct = asyncHandler(async(req,res,next)=>{

    const products = await ProductModel.find({})

    res.status(200).json({
        success:true,
        message: 'all products',
        products
    })
})

export const AddProduct = asyncHandler(async(req,res,next)=>{
    const { name, price, rating, reviewCount, imageSrc, imageAlt, colors, sizes } = req.body;

    if( !name|| !price|| !rating|| !reviewCount|| !imageSrc|| !imageAlt|| !colors|| !sizes){
      
        return res.status(411).json({
        success: false,
        message: 'Missssing Something'
      })

    }
    console.log(sizes);

    const product = await productModel.create({
      name: name,
      price: price,
      rating: rating,
      reviewCount: reviewCount,
      imageSrc: imageSrc,
      imageAlt: imageAlt,
      colors: colors,
      sizes: sizes,
    });

    res.status(200).json({
      success: true,
      message: "New product has added",
      product,
    });
})
