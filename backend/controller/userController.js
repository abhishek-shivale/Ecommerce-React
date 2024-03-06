import userModel from "../models/userModel.js";
import validator from "validator";
import asyncHandler from "../middlewares/asyncHandler.js";
import {SendResponse, SendToken, createPassword, verifyPassword} from "../utils/Utils.js";
import SendEmail from "../utils/SendMail.js";


export const createAccuont = asyncHandler(async(req,res,next)=>{
    const {email,password,phonenumber} = req.body

    if(!email || !password || !phonenumber){
      return SendResponse(404,false,'credential is missing',res)
    }
    
    const isValidMail = validator.default.isEmail(email)

    if(!isValidMail){
       return SendResponse(411,false,'Provided email is not valid', res)
    }

    const already = await userModel.findOne({email:email})

    if(already){
       return SendResponse(411,false,'User has already Registered',res) 
    }

    const hashPass = await createPassword(password)
    
    const user = await userModel.create({
        email:email,
        password:hashPass,
        phonenumber:phonenumber
    })

    SendEmail(email,'Thanks for Joinig','Welcome To Ezcart.Shop Lookin forward to be usefull for you')

   return SendToken('Account has been created',res,user._id)
})

export const loginAccount = asyncHandler(async(req,res,next)=>{

    const {email,password} = req.body

    if(!email || !password){
       return SendResponse(404,false,'missing credentials',res)
    }

    const user = await userModel.findOne({email:email})

    if(!user){
        return SendResponse(411,false,'Invalid Credentials',res)
    }

    const CheckPassword = await verifyPassword(password,user.password)

    if(!CheckPassword){
        return SendResponse(411,false,'Invalid Credentails', res)
    }

    SendEmail(email,'Welcome Back', 'We miss you really We got offer for you')
     

    return SendToken('All credentails is correct', res, user._id )
})

export const UpdateDetails = asyncHandler(async (req, res, next) => {
    const { email, password, phonenumber, address, name } = req.body;
    const id = req.id;

    const user = await userModel.findById(id);

    if(!user){
        return SendResponse(400, false, 'Invalid Token', res); 
    }

    if (!email && !phonenumber && !address && !name && !password) {
        return SendResponse(400, false, 'No fields to update', res); 
    }

    const fieldsToUpdate = { email, phonenumber, address, name };

    for (const key in fieldsToUpdate) {
        if (fieldsToUpdate[key] !== undefined && fieldsToUpdate[key] !== null && fieldsToUpdate[key] !== '') {
            user[key] = fieldsToUpdate[key];
        }
    }
    if (password !== undefined && password !== null && password !== '') {

        const hashpassword = await createPassword(password)

        user.password = hashpassword;
    }

    await user.save();

    SendEmail(user.email,'your Account has been Updated', 'your Account has been Updated for mor info check on website')

    SendResponse(200, true, 'User profile is updated', res);
});

export const GetUserDetails = asyncHandler(async(req,res,next)=>{
    const id = req.id

    const user = await userModel.findById(id)
    
    if(!user){
        return SendResponse(400, false, 'Invalid Token', res); 
    }
    
    const {email,name,phonenumber,address} = user

    const ressponse = {
        email,name,phonenumber,address
    }

    SendResponse(200, true, ressponse, res)
})

export const DeleteUser = asyncHandler(async (req, res, next) => {
    const id = req.id;
    
    const user = await userModel.findById(id);

    if (!user) {
        return SendResponse(404, false, 'User not found', res); 
    }
    
    await userModel.deleteOne({ _id: id }); 
    
    SendEmail(user.email,'Your account has been deleted', 'Your account has been deleted! we are goona miss you much')

    SendResponse(200, true, 'Your account has been deleted', res); 
});
