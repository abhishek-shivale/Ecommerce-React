import orderModel from "../models/orderModel";
import asyncHandler from "../middlewares/asyncHandler.js";
import { v4 as uuidv4 } from "uuid";


export const CreateOrder = asyncHandler(async(req,res,next)=>{
    const {shippingInfo,orderItems,paymentInfo,user} = req.body
    if(!shippingInfo || !orderItems || !paymentInfo || !user){
        return res.status(411).json({
            success: false,
            message: "Iformation is insufficient"
        })
    }
    const order = await orderModel.create({
      shippingInfo: shippingInfo,
      orderItems,
      paymentInfo,
      user,
    });
    res.status(201).json({
        success:true,
        message: 'Your Order has beenn plased',
        orderId: order._id
    })
})