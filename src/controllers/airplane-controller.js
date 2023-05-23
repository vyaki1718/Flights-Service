const {StatusCodes} =require('http-status-codes')
const {AirplaneService} =require('../services')

const {ErrorResponse, SuccessResponse}=require('../utils/common')


async function createAirplane(req,res){
    console.log("airplaneroutes")
    try {
        const airplane= await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })


        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        // console.log(error)
        ErrorResponse.error=error;
        console.log(error)
        return res.status(error.statusCode).json(ErrorResponse)
    }
}


module.exports={
    createAirplane
}