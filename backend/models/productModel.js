import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    rating: {
        type:Number,
        required:true
    },
    reviewCount: {
        type:Number,
        required:true
    },
    imageSrc: {
        type:String,
        required:true
    },
    imageAlt:{
        type:String,
        required:true
    },
    colors:{
        type:String,
        required:true
    },
    sizes:{
        name:{
        type:String,
        required:true
        },
        inStock:{
        type:Boolean,
        required:true
        }
    },
  }
)

export default mongoose.model('Product', ProductSchema)