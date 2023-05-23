const {StatusCodes}=require("http-status-codes");
const {AirplaneRepository}= require('../repositories');
const AppError = require("../utils/errors/app-error");


const airplaneReppository=new AirplaneRepository();


async function createAirplane(data){

    try {
       
        const airplane=await airplaneReppository.create(data)
        return airplane;
    } catch (error) {
      if(error.name= "TypeError"){
      throw new AppError("can not create a new Aiplane object", StatusCodes.INTERNAL_SERVER_ERROR)
      }
        throw error;
    }
}

module.exports={
    createAirplane
}