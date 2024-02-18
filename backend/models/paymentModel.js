import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    txnId: {
        type: String,
        required: true
    },
    order: {
        type: mongoose.Schema.ObjectId,
        ref: "Order",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
},{
    timestamps:true
})

export default mongoose.model('Payment', paymentSchema)