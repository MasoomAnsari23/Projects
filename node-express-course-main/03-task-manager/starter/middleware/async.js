//we are wrapping all the try catch here insted of writing again and again

const asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }}

module.exports=asyncWrapper;