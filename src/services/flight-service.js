const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");


const flightReppository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightReppository.create(data);
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


module.exports = {
    createFlight, 
};
