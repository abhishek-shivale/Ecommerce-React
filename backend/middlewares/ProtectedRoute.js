import { SendResponse, VerfiyToken } from "../utils/Utils.js"

const ProtectedRoute = (req,res,next) =>{
    try {
        const token = req.headers.authorization
        if(!token){
            return SendResponse(404,false,'token missing',res)
        }
        const verifyTokens = VerfiyToken(token)
    
        if(!verifyTokens){
            return SendResponse(411,false,'token Invalid',res)
        }
        
        req.id = verifyTokens.id
        next()
    } catch (error) {
        console.error('Error in protected Route'+ error)
    }
}

export default ProtectedRoute