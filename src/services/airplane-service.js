const {StatusCodes}=require("http-status-codes");
const {AirplaneRepository}= require('../repositories')


const airplaneReppository=new AirplaneRepository();


async function createAirplane(data){

    try {
        console.log("airplane service")
        const airplane=await airplaneReppository.create(data)
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports={
    createAirplane
}