const asyncHandler = (errorFuction) => {
  return(req,res,next)=>{
    try {
        errorFuction(req,res,next)
    } catch (error) {
        next(error)
        res.status(500).json({
            success:false,
            message: 'Error in async middelware',
            error: error
        })
    }
  }
}
export default asyncHandler