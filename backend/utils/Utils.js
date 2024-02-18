import jwt from "jsonwebtoken"

// import dotenv from 'dotenv'

// dotenv.config({path:'/backend/.env'})
const JWTPASS = process.env.JWTPASS || 'PYHHKJGVUKS%^%$GVF&^H677HJ'
const SALTROUND = process.env.SALTROUND || 10
import bcrypt from 'bcrypt'

export const SendResponse = (statuscode,success,message,res) =>{
    return res.status(statuscode).json({
        success:success,
        message:message
    })
}

export const SendToken = async (message,res,id) => {
    try {
        const paylod = {id:id}
        const Token = jwt.sign(paylod,JWTPASS)
        res.status(200).json({
            success:true,
            message:message,
            token:Token
        })
    } catch (error) {
        console.log(error);
    }
}

export const VerfiyToken = (token) =>{
    const decode = jwt.verify(token,JWTPASS)
    if(decode){
        const success = {
            id: decode.id,
            success: true
        }
        return success
    }
    return false
}


export const createPassword = async (password) => {
    try {

        const hashPassword = await bcrypt.hash(password, SALTROUND);
        
        return hashPassword;
    } catch (error) {

        console.error('Error creating password:', error);
        throw error;
    }
};


export const verifyPassword = async (password, hashPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashPassword);
        
        return isMatch;
    } catch (error) {
        console.error('Error verifying password:', error);
        return false;
    }
};