const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
const {TimeHelper} = require('../utils/helper')
function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["flightNumber not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.airplaneId) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["airplaneId not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.departureAirportId) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["departureAirportId not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["arrivalAirportId not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["arrivalTime not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.departureTime) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["departureTime not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.price || req.body.price <=0) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["price not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.totalSeat) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["totalSeat not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!TimeHelper.compareTime(req.body.arrivalTime, req.body.departureTime)){
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["Departure time should not greater than Arrival time"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    
    next();
}

function validateUpdateSeatsRequest(req,res,next){
    if (!req.body.seats) {
        ErrorResponse.messege = "something went wrong while  update seats";
        ErrorResponse.error = { explaination: ["seats not found in the incoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}
module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}