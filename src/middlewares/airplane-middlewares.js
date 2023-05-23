const {StatusCodes} =require('http-status-codes')
const {ErrorResponse}=require('../utils/common')
function validateCreateRequest(req,res,next){
    ErrorResponse.messege="something went wrong while  creating  airplane";
    ErrorResponse.error={explaination:"modelNumber not found in oncoming request"};
    if(!req.body.modelNumber){
       console.log("model number not found")
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse)
    }
    next();
}


module.exports={
    validateCreateRequest
}