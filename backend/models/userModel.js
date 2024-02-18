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
        type:String,
        default:'user',
    }
},{
    timestamps:true
})

const userModel = mongoose.model('User',UserSchema)
export default userModel