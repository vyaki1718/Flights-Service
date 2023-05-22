const {StatusCodes} =require('http-status-codes')
const {AirplaneService} =require('../services')


async function createAirplane(req,res){
    console.log("airplaneroutes")
    try {
        const airplane= await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })

        return res.status(StatusCodes.CREATED).json({
            success:true,
            massege:"success fully created airplane",
            data:airplane,
            error:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.CREATED).json({
            success:false,
            massege:"something went wrong while  creating  airplane",
            data:{},
            error:{explaination:"could not created airplane"}
        })
    }
}


module.exports={
    createAirplane
}