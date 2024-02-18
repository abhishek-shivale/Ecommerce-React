import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    address: {
        type:String,
    },
    phonenumber: {
        type:Number,
        required:true
    },
    role:{
        default:'user',
    }
},{
    timestamps:true
})

export default mongoose.model('User',UserSchema)