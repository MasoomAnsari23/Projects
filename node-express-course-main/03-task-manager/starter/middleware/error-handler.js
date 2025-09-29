const {customAPIerror}=require('../errors/custom-error');

const errorHnadlerMiddleware=(err,req,res,next)=>{
    // console.log(err)
    if(err instanceof customAPIerror){
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg:'something went wrong'});
};
module.exports=errorHnadlerMiddleware;