const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const {Op}= require('sequelize')


const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log(error)
        if ((error.name = "SequelizeValidationError")) {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });

            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "can not create new Flight object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAllFlights(query){
      let customFilter={};
      let sortFilter;
      const tripEndingTime=" 23:59:00";
      if(query.trips){
         [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId=departureAirportId,
        customFilter.arrivalAirportId=arrivalAirportId
      }
      if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
        customFilter.price={
            [Op.between]:[minPrice, maxPrice ? maxPrice :40000 ]
        }
      }
      if(query.travellers){
        customFilter.totalSeat={
            [Op.gte]:query.travellers
        }
      }
      
      if(query.travelDate){
        customFilter.departureTime={
            [Op.between]:[query.travelDate, query.travelDate + tripEndingTime],
        }
      }
      if(query.sort){
          const params= query.sort.split(',');
          sortFilter=params.map((param)=>param.split('_'));
          
      }
    
      try {
        const flights= await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
      } catch (error) {
        // console.log(error)
        throw new AppError(
            "can not fetch the data of all flights",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
      }
}

async function getAllFlight(id) {
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The Flight you requested is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of  Flight",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function updateSeats(data){
    try {
        const resopnse = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
        return resopnse;
    } catch (error) {
        console.log(error)
        throw new AppError(
            "can not update the data of  Flight",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createFlight, 
    getAllFlights,
    getAllFlight,
    updateSeats
};
