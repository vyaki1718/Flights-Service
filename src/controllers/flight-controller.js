const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");

const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { getAllFlights } = require("../services/flight-service");

/***
 * post:/flights/
 * req.body. {
 *    flightNumber
            airplaneId
            departureAirportId
            arrivalAirportId
            arrivalTime
            departureTime
            price
            totalSeat
            boardingGate
 * 
 * }
 */
async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            totalSeat:req.body.totalSeat,
            boardingGate:req.body.boardingGate
        });

        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        console.log(error);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlight(req, res){
    try {
        const flights= await FlightService.getAllFlights(req.query);
        SuccessResponse.data=flights;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFlight(req, res) {
    try {
        const flight = await FlightService.getAllFlight(req.params.id);
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}







module.exports = {
    createFlight,
    getAllFlight,
    getFlight
};
