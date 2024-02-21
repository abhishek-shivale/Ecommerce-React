import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviewCount: {
        type: Number,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true
    },
    colors: [{
        name: {
            type: String,
            required: true
        },
        class: String,
        selectedClass: String
    }],
    sizes: [{
        name: {
            type: String,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true
        }
    }]
});
const productModel = mongoose.model("Product", ProductSchema);
export default productModel
